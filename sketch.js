let player, sky, gameManager;

let arrExplosions = [];

//let enemies = [];
let enemyTimer = 0;
let timeBetweenEnemies = 1;

let font;

let sensorValue = 0;
let buttonPressed = 0;

function preload()
{
  font = loadFont('/assets/retrofont.ttf');
  loadBoard();
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  sky = new Sky();
  player = new Player(12, 45, 3, 20, 5, 30);
  gameManager = new GameManager(font);

  const sensor = new five.Sensor('A0');
  const button = new five.Sensor('A1');
  const beeper = new five.Led(6);

  beeper.blink();

  sensor.on('change', () => {
        sensorValue = sensor.scaleTo(0, height);
      });
  button.on('change', () => {
      buttonPressed = button.scaleTo(0, 1);
  })


  textSize(45);
  frameRate(60);
}

function draw() 
{
  background(20);
  noCursor();
  gameManager.displayInfo(0, 0);

  runExplosions(arrExplosions);

  sky.show();

  player.handleInput(buttonPressed);
  player.y = sensorValue;
  player.move();
  player.drawSprite();

  player.drawBullets();

  if (gameManager.getEnemyCount() == 0)
  {
    gameManager.spawnNextWave();
  }
  else
  {
    gameManager.updateEnemies();
    gameManager.handleProjectileCollisions(player.getBullets());
  }
}
