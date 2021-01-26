var canvas;
var music;
var redS, blueS, greenS, orangeS;
var square, edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redS = createSprite(500,580,180,20);
    redS.shapeColor = "red";

    blueS = createSprite(300,580,180,20);
    blueS.shapeColor = "blue";

    orangeS = createSprite(100,580,180,20);
    orangeS.shapeColor = "orange";

    greenS = createSprite(700,580,180,20);
    greenS.shapeColor = "green";

    //create box sprite and give velocity
    square = createSprite(random(20,750),300, 40, 40); 
    square.shapeColor = "white";
    square.velocityX = 5;
    square.velocityY = -4;
}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();

    square.bounceOff(edges[0]);
    square.bounceOff(edges[1]);
    square.bounceOff(edges[2]);

    //add condition to check if box touching surface and make it box
    if(blueS.isTouching(square)  &&  square.bounceOff(blueS)){
        square.shapeColor = "blue";
        music.play();
    }

    if(redS.isTouching(square)  &&  square.bounceOff(redS)){
        square.shapeColor = "red";
        square.velocityX = 0;
        square.velocityY = 0;
        music.stop();
    }   

    if(greenS.isTouching(square)  &&  square.bounceOff(greenS)){
        square.shapeColor = "green";
        
    }

    if(orangeS.isTouching(square)  &&  square.bounceOff(orangeS)){
        square.shapeColor = "orange";
    }
    drawSprites();
}
