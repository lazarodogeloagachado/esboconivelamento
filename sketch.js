function setup() {  
    createCanvas(800, 800);
       background("white");
   
 }
 
 function draw()  { 
    
    stroke("yellow");
    fill ("white");
   
    if(mouseIsPressed){  
      rect(mouseX, mouseY, 10, 10);
    }
 }
 