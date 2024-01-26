var entity;

function setup() 
{
  createCanvas(400, 400);
  entity = new Entity("flower.jpg", 200, 200, -1, -0.5, 0.1, 0.1);
}

function draw() 
{
  background(220);

  entity.move();
  entity.draw();
}
