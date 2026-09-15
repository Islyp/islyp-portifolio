/** Frame-rate independent motion. Distances: pixels; velocities: pixels/second. */
export const FRICTION = 2.25;
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function coast(body, dt, friction = FRICTION) {
  const decay = Math.exp(-friction * dt);
  const travel = (1 - decay) / friction;
  body.x += body.vx * travel;
  body.y += body.vy * travel;
  body.vx *= decay;
  body.vy *= decay;
}

export function contain(body, bounds) {
  // Keep every panel reachable, including after a throw or viewport resize.
  if (body.x < bounds.left) { body.x = bounds.left; body.vx = Math.abs(body.vx) * .38; }
  if (body.x > bounds.right) { body.x = bounds.right; body.vx = -Math.abs(body.vx) * .38; }
  if (body.y < bounds.top) { body.y = bounds.top; body.vy = Math.abs(body.vy) * .38; }
  if (body.y > bounds.bottom) { body.y = bounds.bottom; body.vy = -Math.abs(body.vy) * .38; }
}

export function releaseVelocity(samples, releaseTime) {
  // Holding the pointer still before release must not replay an old fast gesture.
  const recent = samples.filter(sample => releaseTime - sample.t <= 110);
  if (recent.length < 2) return { vx: 0, vy: 0 };
  const first = recent[0], last = recent.at(-1);
  const elapsed = (releaseTime - first.t) / 1000;
  if (elapsed < .008) return { vx: 0, vy: 0 };
  return { vx: clamp((last.x - first.x) / elapsed, -1800, 1800), vy: clamp((last.y - first.y) / elapsed, -1800, 1800) };
}
