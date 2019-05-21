var fries;
var hand;
var direction = 90;
//
let x=600
let y=225

// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay

//create a variable to hold your avatar
let me;


function preload() {

//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  fries = loadAnimation('assets/fries001.png', 'assets/fries005.png');
  hand = loadAnimation('assets/hand1.png', 'assets/hand5.png');


}

function setup() {
  createCanvas(800, 600);
  //make one avatar called me
  me = new Avatar(600, 200, 3);
}

function draw() {
  background(200, 255, 255);
  me.drawMe();
  me.moveMe();

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well


animation(fries, 400, 300);
// x=x+10;
//
// if(x > 800)
//   x = x-5;

  // hand.setSpeed(3, direction);
  //
  // hand.maxSpeed = 5;

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;

	}

	drawMe(){  // draw the running person
    animation(hand, this.x, this.y);

	}

	moveMe(){
      //if you hold the up arrow, move up by speed
       this.x += this.speed+2;


    if (this.x > 800) { // if you hold the down arrow, move down by speed
        this.speed = -(this.speed+5);
      }

    if (this.x < 400) {
      let speedfactor = .6
      this.speed=this.speed *-random(.6,.9);
      //speedfactor=speedfactor +random(.1,.3);
    }


	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
  	}

}
