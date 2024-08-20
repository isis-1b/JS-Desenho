function setup() {
    createCanvas(400,400);
   background ("black");
  }
  
  function draw(    ) {
    stroke("pink");
    fill("RED");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 45);
    }
    
  }