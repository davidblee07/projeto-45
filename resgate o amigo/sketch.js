var inimigo;
var pc;
var tanque;
var fundoimg, pcimg, inimg, tanqueimg;
var JOGAR = 0;
var ENCERRAR = 1;
var gameState = JOGAR;


function preload(){
 fundoimg = loadImage("baseinimiga.jpg");
 pcimg = loadImage("pc.png");
 inimg = loadImage("inimigo.png");
 tanqueimg = loadImage("tanque.png");

}


function setup() {
	createCanvas(1500,500);

  pc = createSprite(50,350,10,10);
  pc.addImage(pcimg);
  pc.scale = 0.7;
  inimigo = createSprite( 700,350,10,10);
  inimigo.addImage(inimg);
 inimigo.scale = 0.5;
 tanque = createSprite(700,200,10,10);
 tanque.addImage(tanqueimg);
 tanque.scale = 0.7;

}

function draw() {
  background(fundoimg);
  
  if(gameState === JOGAR){
  if(keyDown(UP_ARROW)){
    pc.velocityY = -3;
  }

  if(keyDown(DOWN_ARROW)){
    pc.velocityY = 3;
  }

  if(pc.isTouching(inimigo)){
    inimigo.visible = false;
    pc.visible = false;
    gameState = ENCERRAR;
  }

  if(pc.isTouching(tanque)){
    tanque.visible = false;
    pc.visible = false;
    gameState = ENCERRAR;
  }

}
   


  drawSprites();
}



