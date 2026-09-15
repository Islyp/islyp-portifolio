import test from 'node:test';
import assert from 'node:assert/strict';
import {projectScrollState as state} from '../src/project-scroll.js';
const anchors=[100,1300,2600,3800];

test('each reading position aligns the correct screen on alternating sides',()=>{
  anchors.forEach((scroll,index)=>{
    const result=state(scroll,anchors);
    assert.equal(result.index,index);
    assert.equal(result.side,index%2);
    assert.ok(Math.abs(result.depth)<1e-10);
  });
  assert.equal(state(-100,anchors).index,0);
  assert.equal(state(10000,anchors).index,3);
});
test('crossings recede, spin continuously and reverse with scroll',()=>{
  for(let i=0;i<3;i++){
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
  for(const scroll of [100,700,1300,2000,3800]){
    const result=state(scroll,anchors,{still:true});
    assert.equal(result.side,0);assert.equal(result.depth,0);assert.equal(result.turn,0);
  }
});
