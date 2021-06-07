function preload() {
    }
    
    function setup() {
        canvas = createCanvas(680, 480);
        canvas.position(110, 285);
        video = createCapture(VIDEO);
        video.hide()
    }
    
    function draw() {
    image(video,180,175,410,225);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(600,150,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,450,20);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,400,450,20);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 160, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 160, 55, 55);
    
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 410, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 410, 55, 55);
    }

    
function take_snapshot(){
    save("capture_img.png");
}