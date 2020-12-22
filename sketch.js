
  var ghost, h, me;
  function preload(){
   girl = loadImage("girl.png");
   gI = loadImage("ghost-standing.png");
  }
  
  function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
  
   ghost = createSprite(displayWidth/2+200,550,50,50);
   ghost.velocity.y= Math.round(random(-10,-15));
   ghost.addImage(gI);
   ghost.scale=0.5
  
  h = createSprite(displayWidth/2+400,550,50,50);
  
   me = createSprite(displayWidth/2-200,550,50,50);
   me.addImage(girl);
   me.scale=0.08
  // console.log("hello")
   
  }
  
  
  function draw(){
    background("Yellow");
   console.log(me.position.y);
   
    drawSprites();
    camera.position.x = displayWidth/2;
    camera.position.y = me.y;
    if(me.position.y<-1000 ){
        ghost.velocity=0
      console.log("you win");
     background("green");
     
  }
}
  function keyPressed(){
    if(keyIsDown(UP_ARROW)){
     
      me.position.y+=-100
    }
  }
  