var personagem 
function setup() {
  createCanvas(400,400);
personagem = createSprite(100,20,50,10);
}

function draw() 
{
  background(30);
drawSprites()
  if(keyIsDown(LEFT_ARROW)){
    personagem.x = personagem.x -5
  }

if(keyDown(RIGHT_ARROW)){
  personagem.x = personagem.x +5
}

if(keyIsDown(UP_ARROW)){
  personagem.y = personagem.y -5
}

if(keyDown(DOWN_ARROW)){
  personagem.y = personagem.y +5
}


}




