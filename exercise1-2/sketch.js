let Background1;
let text1;
let stroke1;

function setup() {
  createCanvas(500, 500);
  
  
  Background1 = createColorPicker(255); 
  text1 = createColorPicker(0);
    stroke1 = createColorPicker(255);
  
  
  const container = select("main");
  
  
  Background1.parent(container);
  text1.parent(container);
  stroke1.parent(container);

  Background1.position(220,0);
  text1.position(0,0);
  stroke1.position(450,0)
}

function draw() {

  background(Background1.value());
  fill(text1.value());
  stroke(stroke1.value());
  
  
  textSize(32);
  stroke(1);
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  text('hello world!',250,250);
}