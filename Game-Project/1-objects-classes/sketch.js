//create a variable to hold one Plate
let b;
let anotherPlate;
let paul;
let vw;

function setup() {
  createCanvas(800, 400);
  b = new Plate(0, 100,"red"); //make a new Plate from the Plate class and call it b.
  anotherPlate = new Plate(200,20,"green");
  paul = new Plate(200,40,"yellow");
  vw = new Cars(70,200,"pink");
}


function draw(){
	background(220);
    b.drawPlate(); //draw the Plate called b (go look in the Plate class for the drawPlate function)
    b.movePlate(); //move the Plate called b (go look in the Plate class for the movePlate function)
    anotherPlate.drawPlate();
    anotherPlate.movePlate();
    paul.drawPlate();
    paul.movePlate();
    vw.drawCars();
    vw.moveCars();
}


//Plate class from which to create new Plates with similar properties.
class Plate {

	constructor(x,y,color){ //every Plate needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;

	}
	drawPlate(){  // draw a Plate on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}
	movePlate(){ //update the location of the Plate, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}

class Cars {

  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color= color;
  }
  drawCars(){
    stroke(220);
    fill(this.color);
    rect(this.x,this.y,20,10);
  }
  moveCars(){
    this.x = this.x+2;
		this.y = this.y+.5;
  }
}
