let player, sky, gameManager;

let arrExplosions = [];
let stjerneskudSalt;

//let enemies = [];
let enemyTimer = 0;
let timeBetweenEnemies = 1;
let enemyDeathSound;

//
let projectileFiringSound;

let font;

function preload()
{
  font = loadFont('/assets/retrofont.ttf');

  soundFormats('mp3', 'ogg');
  stjerneskudSalt = loadSound('/assets/stjerneskud/StjerneskudSaltNy2');
  stjerneskudGuitar = loadSound('/assets/stjerneskud/StjerneskudGuitar');
  stjerneskudDase = loadSound('/assets/stjerneskud/StjerneskudDase');
  
  enemyDeathSound = [
    loadSound('soundfiles/Enemies Death/metalSke.mp3'), 
    loadSound('soundfiles/Enemies Death/Skildpade.mp3'),
    loadSound('soundfiles/Enemies Death/stick.mp3'),
    loadSound('soundfiles/Enemies Death/plastikSke.mp3'),
    loadSound('soundfiles/Enemies Death/klud.mp3'),
    loadSound('soundfiles/Enemies Death/felix.mp3'),
    loadSound('soundfiles/Enemies Death/lekkerlyd.mp3')
  ];

  projectileFiringSound = loadSound('soundfiles/ProjectileFiringSound/ProjectileBamAudio.mp3');
}

function setup()
{
  //getAudioContext().suspend();

  createCanvas(windowWidth, windowHeight);
  noSmooth();


  sky = new Sky();
  player = new Player(12, 45, 3, 20, 5, 30, projectileFiringSound);
  gameManager = new GameManager(font);

  textSize(45);
  frameRate(60);
}

function mousePressed() {
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