var fries;
var hand;
var fry;
var direction = 90;
//
let x=600
let y=225

// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay

//create a variable to hold your avatar
let me;
let hands = [];


function preload() {

//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  fries = loadAnimation('assets/fries001.png', 'assets/fries005.png');
  hand = loadAnimation('assets/hand1.png', 'assets/hand5.png');
  fry = loadAnimation ('assets/fry1.png', 'assets/fry2.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //make one avatar called me
  me = new Avatar(600, 200, random(10,20),1);
}

function draw() {
  background(200, 255, 255);
  me.drawMe();
  me.moveMe();
  me.dropFry();

  if(me.hasFry == 4){
    // let hand = new Avatar(600, 200, random(10,20),1);
    //  hands.push(hand);
     me.hasFry = me.hasFry+1;

  }

  for (let i=0; i<hands.length;i++){
    hands[i].drawMe();
    hands[i].moveMe();
    hands[i].dropFry();
  }

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well


animation(fries, width/2, height/2);
// x=x+10;
//
// if(x > 800)
//   x = x-5;

  // hand.setSpeed(3, direction);
  //
  // hand.maxSpeed = 5;

}

function mousePressed(){
  if(mouseX>=me.x-100 && mouseX <= me.x+100 && mouseY >=me.y-100 && mouseY <= me.y+100  ){
   me.hasFry = me.hasFry+1;

  }

}

//avatar class
class Avatar {

	constructor(x,y, speed, hasFry){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.hasFry = hasFry;
      //  this.speedfactor = speedfactor;

	}

	drawMe(){  // draw the running person
    print(this.hasFry);
    if(this.hasFry ==1){
        animation(hand, this.x, this.y);
    }

    if(this.hasFry == 2){
        animation(hand, this.x, this.y);
        animation(fry, this.x-45, this.y+100);
    }
   if (this.hasFry ==3){
     print("drop the fry");
     fill(200, 255, 255)
     noStroke();
     rect(this.x-100,this.y-100, 200,350);
     animation(fry, this.x-45, this.y+100);
     this.y = this.y +5;
   }

   // if (this.hasFry == 4){
   //   this.y = this.y;
   // }


	}

	moveMe(){
      //if you hold the up arrow, move up by speed
       this.x += this.speed;


    if (this.x > width) { // if you hold the down arrow, move down by speed
     this.speed = -this.speed;

      }

    if (this.x < width/2) {
     this.speed= - this.speed ;

    }

    if (this.x < width/2 && this.hasFry ==1) {
      this.hasFry = 2;
    }

    if(this.y>height-100){
      this.hasFry = 4;

    }

	}

  dropFry(){
    if (this.hasFry == 3){



    }

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
