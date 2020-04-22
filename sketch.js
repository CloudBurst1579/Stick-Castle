const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log1 = new Log(400,280,220,PI);
    log2 = new Log(355,160,110,PI/2);
    box1 = new Box(355,290,30,200);
    log3 = new Log(310,280,220,PI);

    log4 = new Log(520,340,100,PI);
    box2 = new Box(600,365,50,50);
    log5 = new Log(680,340,100,PI);

    log6 = new Log(600,280,180,PI/2);

    log7 = new Log(520,220,100,PI);
    box3 = new Box(600,240,50,50);
    log8 = new Log(680,220,100,PI);

    log9 = new Log(600,160,180,PI/2);

    log10 = new Log(565,100,120,PI/6);
    box4 = new Box(600,125,50,50);
    log11 = new Log(635,100,120,-PI/6);

    log12 = new Log(800,280,220,PI);
    log13 = new Log(845,160,110,PI/2);
    box5 = new Box(845,290,30,200);
    log14 = new Log(890,280,220,PI);

    ground = new Ground(600,400,1200,20);
}

function draw()
{
    background(255);
    Engine.update(engine);

    log1.display();
    log2.display();
    box1.display();
    log3.display();

    log4.display();
    box2.display();
    log5.display();

    log6.display();

    log7.display();
    box3.display();
    log8.display();

    log9.display();

    log10.display();
    box4.display();
    log11.display();

    log12.display();
    log13.display();
    box5.display();
    log14.display();

    ground.display();
}