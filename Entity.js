/*
Put images and sprites in a folder called 'assets'
*/

class Entity
{
  // Initialize entity with filename for image (not path) position, speed and scale (defualts to 1)
  constructor(imageFileName, xPosition, yPosition, xSpeed, ySpeed, xScale = 1, yScale = 1)
  {
    let path = 'assets/' + imageFileName;
    this.sprite = loadImage(path);

    this.x = xPosition;
    this.y = yPosition;

    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;

    this.xScale = xScale;
    this.yScale = yScale;

    this.xOrigo = 0;
    this.yOrigo = 0;

    this.width = this.sprite.width * this.xScale;
    this.height = this.sprite.height * this.yScale;
  }

  // Draw entity's sprite at current position and with current scale
  drawSprite()
  {
    image(this.sprite, this.x - this.xOrigo, this.y - this.yOrigo, this.width, this.height);
  }

  // Move the entity's position by its current speed
  move()
  {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  // Set speed on x- & y-axis
  setSpeed(xSpeed, ySpeed)
  {
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  // Set speed on x-axis
  setSpeedX(xSpeed)
  {
    this.xSpeed = xSpeed;
  }

  // Set speed on y-axis
  setSpeedY(ySpeed)
  {
    this.ySpeed = ySpeed;
  }

  // Set position on x- and y-axis
  setPosition(xPosition, yPosition)
  {
    this.x = xPosition;
    this.y = yPosition;
  }
  
  // Set position on x-axis
  setPositionX(xPosition)
  {
    this.xPosition = xPosition
  }

  // Set position on y-axis
  setPositionY(yPosition)
  {
    this.yPosition = yPosition
  }

  // Set scale on x- and y-axis
  setScale(xScale, yScale)
  {
    this.xScale = xScale;
    this.yScale = yScale;

    this.width = this.sprite.width * this.xScale;
    this.height = this.sprite.height * this.yScale;
  }

  // Set scale on x-axis
  setScaleX(xScale)
  {
    this.xScale = xScale;

    this.width = this.sprite.width * this.xScale;
  }

  // Set scale on y-axis
  setScaleY(yScale)
  {
    this.yScale = yScale;

    this.height = this.sprite.height * this.yScale;
  }

  // Set origin of entity (where the center of the sprite is)
  setOrigo(xOrigo, yOrigo)
  {
    this.xOrigo = xOrigo;
    this.yOrigo = yOrigo;
  }
}