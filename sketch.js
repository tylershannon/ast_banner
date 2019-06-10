var total = 50;
var systems;
var gravity;
var repeller;
let img;
let fontBanner;

function preload() {
  img = loadImage('./image_background.jpg');
  fontBanner = loadFont('./MetaOT-Light.otf');
}


function setup() {

  createCanvas(windowWidth,windowHeight);

  systems = [];
  for(var i =0;i<total;i++){
    systems.push(new Particle(createVector(floor(random(width)),floor(random(height)))));
  }

}

function draw() {

  background(51);
  //tint(255,100);
  //image(img, 0, 0,windowWidth);

  for(var i=0;i<systems.length;i++){
    systems[i].show();

    for(var j=0;j<systems.length;j++){
      var distance = dist(systems[i].location.x,systems[i].location.y,systems[j].location.x,systems[j].location.y);
      strokeWeight(2.0);

      if(distance<200){
        var lineAlpha = map(distance,0,200,255,0);
        stroke(255,255,255,lineAlpha);
        line(systems[i].location.x,systems[i].location.y,systems[j].location.x,systems[j].location.y);

      }

    }
    systems[i].update();
  }



  let s = 'As a pioneering architecture firm in downtown Boston, Arrowstreet is on a mission to advance their industry’s approach to design. Establishing an in-house Innovation Lab: Arrowstreet AIR, the firm is leading their industry using innovative project practices and design visualization.'
  textFont(fontBanner);
  textSize(42);
  textAlign(CENTER);
  fill(255,255,255);
  var boundingBoxWidth = 850;
  var boundingBoxHeight = 500;
  text(s,(windowWidth/2)-(boundingBoxWidth/2),(windowHeight/2)-(boundingBoxHeight/2)+75,boundingBoxWidth,boundingBoxHeight);

  //saveCanvas('frame','png');

}
function mousePressed(){
  systems.push(new Particle(createVector(mouseX,mouseY)));
}
