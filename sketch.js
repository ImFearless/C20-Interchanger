var rct1,rct




function setup() {

  createCanvas(800,400);
  rct=createSprite(400, 200, 50, 50);
  rct1=createSprite(300,100,59,4)
  rct.shapeColor='seagreen'
  rct1.shapeColor='blue'
}

function draw() {
  background(255,1,1);  
  drawSprites();
  rct1.x=mouseX
  rct1.y=mouseY
  if(rct.x-rct1.x<=rct1.width/2+rct.width/2&&
    rct1.x-rct.x<=rct1.width/2+rct.width/2&&
    rct1.y-rct.y<=rct1.height/2+rct.height/2&&
    rct.y-rct1.y<=rct1.height/2+rct.height/2){
    rct1.shapeColor='seagreen'
    rct.shapeColor='blue' 
  }
else{
  rct.shapeColor='seagreen'
  rct1.shapeColor='blue'
}
}