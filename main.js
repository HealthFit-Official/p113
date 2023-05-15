function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480, );

    fill(227, 224, 175);
    stroke(227, 224, 175);
    rect(0, 0,50, 640);
    rect(50, 0,590, 50);
    rect(590, 50,50, 640);
    rect(50, 430 ,540, 50);

    

   
}

function take_snapshot(){
    save('filter_image.png');
}
