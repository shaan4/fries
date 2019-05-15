// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var fries;
var hand;
var direction = 90;
//
let x=600
let y=225
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  fries = loadAnimation('assets/fries001.png', 'assets/fries005.png');
  hand = loadAnimation('assets/hand1.png', 'assets/hand5.png');


}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200, 255, 255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well

animation(hand, x, y);
animation(fries, 400, 300);
x=x+10;

if(x > 800)
  x = x-5;

  // hand.setSpeed(3, direction);
  //
  // hand.maxSpeed = 5;

}
