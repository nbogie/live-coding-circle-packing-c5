function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("white");
  const allCirclesData = calculatePackedCircles(width, height);
  // drawDesign1(allCirclesData);
  drawDesign2(allCirclesData);
}

//This introduces the use of filter
function drawDesign1(allCirclesData: CircleData[]) {
  const circlesDataToDraw = allCirclesData.filter(isWithinRange);

  function isWithinRange(c: CircleData) {
    const canvasCentrePos = { x: width / 2, y: height / 2 };
    return distance(c.pos, canvasCentrePos) < 200;
  }

  for (const c of circlesDataToDraw) {
    drawCircle(c, "filled");
  }
}

//this uses filters a bit more
function drawDesign2(allCircles: CircleData[]) {
  const centre = { x: width / 2, y: height / 2 };

  function isWithinRange(c: CircleData) {
    return distance(c.pos, centre) < 200;
  }

  const leftCircles = allCircles.filter(
    (c) => c.pos.x < centre.x && isWithinRange(c)
  );
  const rightCircles = allCircles.filter(
    (c) => c.pos.x > centre.x && !isWithinRange(c)
  );

  for (const c of leftCircles) {
    drawCircle(c, "filled");
  }
  for (const c of rightCircles) {
    drawCircle(c, "empty");
  }
}

/** a type (a "union type") of OUR creation,
 * used to communicate whether we should fill or outline a a shape */
type FillStyle = "filled" | "empty";
function drawCircle(c: CircleData, fillStyle: FillStyle) {
  const shadeOfGray = random(50, 100);
  if (fillStyle === "filled") {
    fill(shadeOfGray);
    noStroke();
  } else {
    stroke(shadeOfGray);
    noFill();
  }
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}
