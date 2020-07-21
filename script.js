// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.
/* global createCanvas, background, colorMode, HSL, windowWidth, windowHeight,
   random, width, height, ellipse, text, fill, noStroke */

//let dot1, dot2, dot3;
let dots, numberOfDots;
let marginTop, marginSide, origin, colorInitial;

function setup() {
  marginSide = 80;
  marginTop = 80;
  createCanvas(windowWidth - marginSide, windowHeight - marginTop);
  colorMode(HSL, 360, 100, 100);
  numberOfDots = 100;
  origin = 0;
  colorInitial = 100;
  
  // dot1 = new BouncyDot();
  // dot2 = new BouncyDot();
  // dot3 = new BouncyDot();
  // dots = [dot1, dot2, dot3];
  // dots= [];
  // for (let i=0; i < numberOfDots; i++) {
  //   dots.push (new BouncyDot ());
  
  dots = [
    new BouncyDot (),
    new BouncyDot (), 
    new BouncyDot (), 
    new BouncyDot ()
  ]
  dots.push ();
}

function draw() {
  background(colorInitial*2.2, colorInitial * 0, colorInitial * 0.9);
  
  for (let i=0; i < dots.length; i++) {
    dots[i].float ();
    dots[i].display ();
  }
  // dots[0].float();
  // dots[0].display();
  // dots[1].float();
  // dots[1].display();
  // dots[2].float();
  // dots[2].display();
}

function mousePressed() {
  // We'll use this for console log statements only.
 console.log(dots[0].x);
//dots.push(new BouncyDot ());
}

class BouncyDot {
  constructor() {
    // Randomly generate position
    this.x = random(width);
    this.y = random(height);
    // Randomly generate radius
    this.r = random(5, 12);
    // Randomly generate color
    this.color = random(360);
    // Randomly generate a master velocity (broken into components)...
    this.masterXvelocity = random(0.5, 3);
    this.masterYvelocity = random(0.5, 3);
    // ...and use those as starting velocities.
    // how fast it is going without worrying about the direction 
    // like the absolute value of the velocity 
    this.xVelocity = this.masterXvelocity;
    this.yVelocity = this.masterYvelocity;
  }

  float() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
    }
    if (this.x - this.r < origin) {
      this.xVelocity = this.masterXvelocity;
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
    }
    if (this.y - this.r < origin) {
      this.yVelocity = this.masterYvelocity;
    }
  }

  display() {
    fill(this.color, colorInitial* 0.8, colorInitial* 0.7);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}