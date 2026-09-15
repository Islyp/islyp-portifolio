import test from 'node:test';
import assert from 'node:assert/strict';
import { coast, contain, releaseVelocity } from '../src/physics.js';

test('inércia desacelera gradualmente sem depender da taxa de quadros',()=>{
  const simulate = fps => {
    const body={x:0,y:0,vx:600,vy:-180};
    for(let i=0;i<fps;i++)coast(body,1/fps);
    return body;
  };
  const a=simulate(30),b=simulate(144);
  assert.ok(a.x>200 && a.vx>0 && a.vx<70);
  assert.ok(Math.abs(a.x-b.x)<1e-8);
  assert.ok(Math.abs(a.y-b.y)<1e-8);
});
test('soltar após segurar o painel parado não produz impulso antigo',()=>{
  assert.deepEqual(releaseVelocity([{x:0,y:0,t:0},{x:200,y:100,t:50}],300),{vx:0,vy:0});
});
test('o impulso segue a direção e a velocidade do gesto recente',()=>{
  const velocity=releaseVelocity([{x:0,y:0,t:100},{x:60,y:-30,t:150}],160);
  assert.equal(velocity.vx,1000);
  assert.equal(velocity.vy,-500);
});
test('limites mantêm o painel acessível e amortecem o impacto',()=>{
  const body={x:1100,y:-30,vx:800,vy:-500};
  contain(body,{left:100,right:900,top:100,bottom:650});
  assert.equal(body.x,900);assert.equal(body.y,100);
  assert.ok(body.vx<0 && body.vx>-800);
  assert.ok(body.vy>0 && body.vy<500);
});
