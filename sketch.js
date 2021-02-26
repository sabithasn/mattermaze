const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gamestate="start";
var level=1;
var currentLevel;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    if(level==1){
        currentLevel=new Level1();
    }
    player=new Player (50,50,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    

    currentLevel.display();
    player.display();
    if(gamestate=="won"){
        textSize(35);
        fill("white")
        text("Level Complete",250,300)
        
    }
    fill("white");
    rectMode(CENTER);
    rect(90,535,140,110);
}
function keyPressed(){
    if(gamestate=="start"){
        if(keyCode==LEFT_ARROW){
            player.move(-20,0);
        }
        else if(keyCode==RIGHT_ARROW){
            player.move(20,0);
        }
        else if(keyCode==UP_ARROW){
            player.move(0,-20);
        }
        else if(keyCode==DOWN_ARROW){
            player.move(0,+20);
        }
        
    }
    if(gamestate=="won"&&keyCode==32){
        level+=1;
        switch(level){
            case 2:currentLevel.destroy();
                currentLevel=new Level2();
            break;
            case 3:currentLevel.destroy();
                currentLevel=new Level3();
            break;
            case 4:currentLevel.destroy();
                currentLevel=new Level4();
            break;
            case 5:currentLevel.destroy();
                currentLevel=new Level5();
            break;
            default:break;
        }
        gamestate="start";
        Matter.Body.setPosition(player.body,{x:50,y:50})
    }

}