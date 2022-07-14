interface CircleData {
  pos: Position;
  radius: number;
}
interface Position {
  x: number;
  y: number;
}

function calculatePackedCircles(
  areaWidth: number,
  areaHeight: number
): CircleData[] {
  const validCircles: CircleData[] = [];
  for (let i = 0; i < 1000000; i++) {
    const candidate: CircleData = makeRandomCircle(areaWidth, areaHeight);
    if (isNotOverlappingAny(candidate, validCircles)) {
      validCircles.push(candidate);
    }
  }
  return validCircles;
}

function isNotOverlappingAny(c: CircleData, others: CircleData[]): boolean {
  // Harder to read, depending on the audience.
  // Don't seek to write code like this,
  // but do try to understand it.
  return !others.some((other) => areOverlapping(c, other));
}

function makeRandomCircle(w: number, h: number): CircleData {
  return {
    pos: { x: random(0, w), y: random(0, h) },
    radius: random(2, 50),
  };
}
/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
  const x = p1.x - p2.x;
  const y = p1.y - p2.y;
  const hyp = Math.sqrt(x * x + y * y);
  return hyp;
}

function areOverlapping(c1: CircleData, c2: CircleData): boolean {
  const distanceBetween = distance(c1.pos, c2.pos);
  return c1.radius + c2.radius > distanceBetween;
}

function runTestsOnAreOverlapping() {
  const tc1 = { pos: { x: 0, y: 0 }, radius: 500 };
  const tc2 = { pos: { x: 550, y: 0 }, radius: 100 };
  const tc3 = { pos: { x: 800, y: 0 }, radius: 100 };

  console.assert(areOverlapping(tc1, tc2), "tc1 and tc2 should overlap");
  console.assert(!areOverlapping(tc1, tc3), "tc1 and tc3 should not overlap");
}
runTestsOnAreOverlapping();
