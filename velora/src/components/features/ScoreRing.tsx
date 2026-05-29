// TODO: NOT COMPLETE

function ScoreRing({ score, size = 80 }) {
  const r = size / 2 - 8;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = score >= 75 ? "#00e5ff" : score >= 50 ? "#a78bfa" : "#f87171";

  return <svg width={size} height={size} className="-rotate-90"></svg>;
}

export default ScoreRing;
