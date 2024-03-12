let player, sky, gameManager;

let arrExplosions = [];

//let enemies = [];
let enemyTimer = 0;
let timeBetweenEnemies = 1;

let font;
function preload()
{
  font = loadFont('/assets/retrofont.ttf');
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  sky = new Sky();
  player = new Player(12, 45, 3, 20, 5, 30);
  gameManager = new GameManager(font);

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

  player.handleInput();
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
