
var fries;
var hand;
var fry;
var slap;
var mickey;
var xtimer =0;
var direction = 90;
//
let number = "lives:"
let food = 20;
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
  slap = loadAnimation ('assets/xmarker1.png', 'assets/xmarker2.png');
  mickey = loadAnimation ('assets/Drawing1.png', 'assets/Drawing2.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //make one avatar called me
  me = new Avatar(600, 200, random(10,15),1);
  hands.push(me);
}

function draw() {
  background(200, 255, 255);
  textSize(32);
  fill(237, 34, 23);
  stroke(20);
  text('Stop Mickey from stealing your Mickey Ds', width/2-300, 30);
  textSize(16);
  fill(214, 11, 237);
  text('Click the hands to slap them away', width/2-120, height-10);
  textSize(24)
  fill(255, 229, 104);
  text(number, 10, 30);
  text(food, 10, 60);

print(xtimer)

  for (let i=0; i<hands.length;i++){
    //print(hands);
    hands[i].drawMe();
    hands[i].moveMe();
    if(hands[i].hasFry==4){
      let hand = new Avatar(600, 200, random(10,15),1);
       hands.push(hand);
       hands[i].hasFry=hands[i].hasFry+1;
      }
    if(hands[i].x>width && hands [i].hasFry==2){
      food = food-1;
      hands[i].hasFry = hands[i].hasFry-1;
  }
}
 for (let i=0; i<hands.length;i++){

}

  animation(fries, width/2, height/2);
if(food<1){
  animation (mickey, width/2, height/2);
}

}

function mousePressed(){
  // if(mouseX>=me.x-100 && mouseX <= me.x+100 && mouseY >=me.y-100 && mouseY <= me.y+100  ){
  //  me.hasFry = me.hasFry+1;
  // }
for(let i=0;i<hands.length;i++){
  if(mouseX>=hands[i].x-100 && mouseX <= hands[i].x+100 && mouseY >=hands[i].y-100 && mouseY <= hands[i].y+100  ){
   hands[i].hasFry = hands[i].hasFry+1;
  }
}


}

//avatar class
class Avatar {

	constructor(x,y, speed, hasFry){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.hasFry = hasFry;

	}

	drawMe(){
    //print(this.hasFry);
    if(this.hasFry ==1){
        animation(hand, this.x, this.y);
    }

    if(this.hasFry == 2){
        animation(hand, this.x, this.y);
        animation(fry, this.x-45, this.y+100);
        xtimer = frameCount;
    }
   if (this.hasFry ==3){
     //print("drop the fry");
     fill(200, 255, 255)
     noStroke();
     rect(this.x-100,this.y-100, 200,350);
     animation(fry, this.x-45, this.y+100);
     if (frameCount<xtimer+5){
       animation(slap, this.x-45, this.y-100);
     }

     if(this.y<=500){
       this.y = this.y +5;
     }

   }

	}

	moveMe(){
  if(this.hasFry<=2){
    this.x += this.speed;
    if (this.x > width) { // if you hold the down arrow, move down by speed
     this.speed = - this.speed;
      }

    if (this.x < width/2) {
     this.speed= - this.speed ;
    }
  }
    //move along the x-axis

    if (this.x < width/2 && this.hasFry ==1) {
      this.hasFry = 2;
    }

    if(this.y>=499 && this.hasFry ==3){
      this.hasFry = 4;

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
