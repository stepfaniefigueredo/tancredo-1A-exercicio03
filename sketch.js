let cor;
let posicaoHorizontal;
let posicaoVertical;
let posicaoHorizontal2;
let posicaoVertical2;


function setup() {
  
  createCanvas(400, 400);
   background("violet");
  cor = color(random(0, 255), random(0,255), random(0, 255))
 posicaoHorizontal = 0;
 posicaoVertical = random(height);
 posicaoHorizontal2 = 0;
 posicaoVertical2 = random(height);
 }
                            

function draw() {
  
  stroke(cor);
  fill(cor);
 circle(posicaoHorizontal, posicaoVertical, 40);
   circle(posicaoHorizontal2, posicaoVertical2, 40);

  posicaoHorizontal+= random(1 , 4);
  posicaoVertical+= random(-3, 3);
   posicaoHorizontal2+= random(1 , 4);
  posicaoVertical2+= random(-3, 3);
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0,255), random(0, 255), random(0, 100));
  }
}