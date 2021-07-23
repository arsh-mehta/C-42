var iss, spacecraft , bg , iss_img, spacecraft_img;
var hasDocked = false;

function preload(){
  bg = loadImage('Docking-undocking/spacebg.jpg')
  iss_img = loadImage('Docking-undocking/iss.png')
  spacecraft_img_1 = loadImage('Docking-undocking/spacecraft1.png')
  spacecraft_img_2 = loadImage('Docking-undocking/spacecraft2.png')
  spacecraft_img_3 = loadImage('Docking-undocking/spacecraft3.png')
  spacecraft_img_4 = loadImage('Docking-undocking/spacecraft4.png')
}

function setup() {
  createCanvas(600,350);

  iss = createSprite(300,130)
  iss.addImage(iss_img)
  iss.scale = 0.25;

  spacecraft = createSprite(285,240)
  spacecraft.addImage(spacecraft_img_1)
  spacecraft.scale = 0.15;
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)

    if(keyDown("UP_ARROW")) spacecraft.y-=2;
    if(keyDown("left_arrow")) spacecraft.x-=2;
    if(keyDown("right_arrow")) spacecraft.x+=2;
    if(keyDown("down_arrow")) spacecraft.addImage(spacecraft_img_2)
  }

  if(spacecraft.y<=iss.y+70 && spacecraft.x <= iss.x-10){
    hasDocked = true;
    textSize(25)
    fill("White")
    text("Docking Succesful",200,300)
  }

  drawSprites();
}