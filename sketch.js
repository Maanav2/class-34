var ball;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //it is used to create the dataabase object
    database = firebase.database();
    //reading data from database
    var positionNodeRef=database.ref('ball/position');
    positionNodeRef.on("value",function(data){
        var pos=data.val();
        ball.x=pos.x;
        ball.y=pos.y;
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x1,y1){
   database.ref('ball/position').set({
       x:ball.x+x1,
       y:ball.y+y1
   })

}
