interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    //TODO: you need to implement this function properly!  
    //These are just a couple of random circles, with no consideration yet for overlap.
    return [
        { pos: { x: 300, y: 300 }, radius: 100 },
        { pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: 40 },
    ];
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