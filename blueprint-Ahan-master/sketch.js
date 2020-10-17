const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box, pig, bird, log;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //new is keyword: which tells the machine that it has to create an object
    //after new we're supposed to write the class name
    //() --> it means machine will call the constructor
    //new <CLASS Name>()
    ground = new Ground(600,380,1200,30);
    box = new Box(700, 320, 70, 70);
    console.log(box.body);
    pig = new Pig(800,350,50,50);
    box1= new Box(900,320,70,70);
    box2= new Box(900,240,70,70);
    bird = new Bird(50,50,50,50);
    log = new Log(800,260,300,PI*28.5);
    box3 = new Box(700,240,70,70)
    pig2 = new Pig(800,240,50,50)
    log1 = new Log(800,180,300,PI*28.5);
    box4= new Box(810,160,70,70)
    log2= new Log(760,155,150,PI*28.5/7);
    log3= new Log(870,155,150,-PI*28.5/8);

}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    box.display();
    pig.display();
    bird.display();
    log.display();
    box1.display();
    box2.display();
    box3.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    box4.display();
}