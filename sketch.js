const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var rocket;
var monster;
var bullet;
function preload() {
  bg=loadImage("images/bg2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    rocket = new Rocket(600,900,400,500)
    monster = new Monster(600,100,300,180);
    bullet = new Bullets(600,950,50)
    
}

function draw(){
    background(bg);
    Engine.update(engine);
    rocket.display();
    monster.display();
    bullet.display();
     
}

function mouseDragged(){
    Matter.Body.setPosition(rocket.body, {x: mouseX , y: 900});
    bullet.body.position.x = rocket.body.position.x;
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setStatic(bullet.body, false)
        //Matter.Body.setVelocity(bullet.body, {x:0, y:-100})
        //Matter.Body.setAngularVelocity(bullet.body,-100)
        
       // Matter.Body.applyForce(bullet.body, bullet.body.position, {x:rocket.body.position.x, y:-100})
        Matter.Body.translate(bullet.body, {x:0, y:-800})
       // bullet.body.position.x = rocket.body.position.x;
    }
}

/*
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[];//
        Matter.Body.setPosition(bird.body,{x: 200,y:50})
        slingshot.attach(bird.body);
    }
}




 async function changeBg () {
var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
var responsejson=await response.json()
var dateTime=responsejson.datetime
var hour=dateTime.slice(11,13)
console.log(hour)
if(hour>8&& hour<14)
{
bg=loadImage("images/bg2.jpg")

}
else{bg=loadImage("images/bg1.jpg")}
}

*/