function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("white");
  const circlesDataArray = calculatePackedCircles(width, height);
  for (const c of circlesDataArray) {
    drawCircle(c);
  }
  //bonus note: you could also filter the circlesDataArray before drawing,
  //to obtain only circles which meet criteria around certain radius or position
}

function drawCircle(c: CircleData) {
  const shadeOfGray = random(50, 100);
  //if on left hand side of canvas...
  if (c.pos.x < width / 2) {
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
