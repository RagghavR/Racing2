var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount,allPlayers,gameState;
var car1,car2,trackImg,car1Img,car2Img,cars

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1Img = loadImage("assets/car1.png")
  car2Img = loadImage("assets/car2.png")
  trackImg = loadImage("assets/track.jpeg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database()
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount == 2){
    game.updateState(1)
  }
  if(gameState == 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
