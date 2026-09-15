const clamp = value => Math.min(1, Math.max(0, value));
const smooth = value => value * value * (3 - 2 * value);

// Read at the endpoints; cross to the other side between the cards.
export function projectScrollState(scroll, anchors, { still = false, compact = false } = {}) {
  let segment = 0;
  while (segment < anchors.length - 2 && scroll >= anchors[segment + 1]) segment++;
  const last = anchors.length - 1;
  const span = Math.max(1, anchors[Math.min(segment + 1, last)] - anchors[segment]);
  const progress = clamp((scroll - anchors[segment]) / span);
  const travel = smooth(clamp((progress - (compact ? .78 : .28)) / (compact ? .22 : .44)));
  const index = Math.min(last, segment + (travel >= .5 ? 1 : 0));
  const from = segment % 2, to = (segment + 1) % 2;
  return {
    index, segment, travel,
    side: still || compact ? 0 : from + (to - from) * travel,
    depth: still ? 0 : Math.sin(travel * Math.PI),
    turn: still ? 0 : (segment + travel) * Math.PI * 2,
  };
}
