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
  createCanvas(1920, 1080);
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

  //Check for collisions between player an enemies
  if(gameManager.projectilePlayerCollision(player.getPosition()))
  {
    player.updatePlayerHealth(-1);
  }

  //Is player has no health left
  if(player.isPlayerDead())
  {
    location.reload(); //Should probably be changed
  }
  
}
