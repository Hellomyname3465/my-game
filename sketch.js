function preload() {
bgImage = loadImage("bg.jpg")
  player_Animation = loadAnimation("1.png","2.png","3.png")
}

function setup() {
  createCanvas(400,600);
bg = createSprite(200,50)
bg.scale = 2.5
bg.addImage(bgImage)
 player =  createSprite(200,500, 50, 50);
 player.scale = 2
player.addAnimation("player",player_Animation)
}

function draw() {
  background(255,255,255);  
  // add movements
camera.x = player.x;
camera.y = player.y
  if(keyDown("up")){
    player.y = player.y - 10
  }
  if(keyDown("right")){
    player.x = player.x + 10
  }

  if(keyDown("left")){
    player.x = player.x - 10
  }
console.log(player.y)
 

  drawSprites();
}