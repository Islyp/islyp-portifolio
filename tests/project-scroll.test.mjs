import test from 'node:test';
import assert from 'node:assert/strict';
import {projectScrollState as state, dampScroll} from '../src/project-scroll.js';
const anchors=[100,1300,2600,3800,5100];

test('each reading position aligns the correct screen on alternating sides',()=>{
  anchors.forEach((scroll,index)=>{
    const result=state(scroll,anchors);
    assert.equal(result.index,index);
    assert.equal(result.side,index%2);
    assert.ok(Math.abs(result.depth)<1e-10);
  });
  assert.equal(state(-100,anchors).index,0);
  assert.equal(state(10000,anchors).index,4);
});
test('crossings recede, spin continuously and reverse with scroll',()=>{
  for(let i=0;i<anchors.length-1;i++){
    const middle=(anchors[i]+anchors[i+1])/2;
    const result=state(middle,anchors);
    assert.ok(Math.abs(result.side-.5)<1e-10);
    assert.ok(result.depth>.99);
    const before=state(middle-1,anchors),after=state(middle+1,anchors);
    assert.ok(Math.abs(after.turn-before.turn)<.1);
    assert.equal(before.index,i);assert.equal(after.index,i+1);
    assert.deepEqual(state(middle,anchors),result);
  }
});
test('mobile keeps the current screen while its long card is being read',()=>{
  const reading=state(100+(1300-100)*.7,anchors,{compact:true});
  assert.equal(reading.index,0);assert.equal(reading.depth,0);assert.equal(reading.side,0);
  assert.equal(state(1300,anchors,{compact:true}).index,1);
});
test('reduced motion removes lateral movement, depth and rotations',()=>{
  for(const scroll of [...anchors,700,2000,4400]){
    const result=state(scroll,anchors,{still:true});
    assert.equal(result.side,0);assert.equal(result.depth,0);assert.equal(result.turn,0);
  }
});

test('scroll damping takes the same time at 30, 60 and 120 Hz',()=>{
  const positions=[30,60,120].map(hz=>{
    let position=0;
    for(let frame=0;frame<hz/2;frame++)position=dampScroll(position,1000,1/hz);
    return position;
  });
  assert.ok(positions.every(value=>Math.abs(value-positions[0])<1e-8));
  assert.ok(positions[0]>990&&positions[0]<1000);
});

test('damping reverses without overshoot and settles to stop requesting frames',()=>{
  let position=700;
  for(let frame=0;frame<120&&position!==100;frame++){
    const next=dampScroll(position,100,1/60);
    assert.ok(next>=100&&next<=position);
    position=next;
  }
  assert.equal(position,100);
  assert.equal(dampScroll(position,100,1/60),100);
});
