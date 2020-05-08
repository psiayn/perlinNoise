
let noiseScal = 0.01;
let c;
function setup() {
  c = createCanvas(600, 800);
  pixelDensity(1);
  // saveCanvas(c, 'myCanvas', 'jpg');
  // frameRate(1);
}

var off = 0;

function draw() {
  background("blue");
  loadPixels();
  
  // off = 0;
  var yoff = 0;
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * (width )) * 4;
      pixels[index + 0] = red(colorPicker(noise(xoff,off)));
      pixels[index + 1] = green(colorPicker(noise(xoff,off)));
      pixels[index + 2] = blue(colorPicker(noise(xoff,off)));
      pixels[index + 3] = 255;
      xoff += noiseScal;
    }
    off+=noiseScal ;
  }
  updatePixels();
  noLoop();
}

function colorPicker(noiseVal){
   if(noiseVal <= 0.2)
       return color(0, 0, 128);
      
   else if(noiseVal > 0.2 && noiseVal <= 0.5)
       return color(0, 0, 255);
   
   else if(noiseVal > 0.3 && noiseVal <= 0.45) 
       return color(0, 128, 255);

   else if(noiseVal > 0.45 && noiseVal <= 0.5)
       return color(240, 240, 64);
   
   else if(noiseVal > 0.5 && noiseVal <= 0.55)
       return color(32, 160, 0);

   else if(noiseVal > 0.55 && noiseVal <= 0.6)
       return color(224, 224, 0);
  
   else if(noiseVal > 0.6 && noiseVal <= 0.65)
       return color(128, 128, 128);

   else
       return color(255, 255, 255);

}
    
function keyPressed(){
  if (key == 's' || key == 'S'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
