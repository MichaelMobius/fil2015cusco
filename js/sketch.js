/*var a=0;
var va=1;
var b=0;
var vb=1;
function setup() {
  // put setup code here
 	createCanvas(900,600);
 	background(255,0,0);
}

function draw() {
  // put drawing code here
 	fill(random(255),random(255),random(255));
	ellipse(50+a,50+b,50,50);
	a=a+3*va;
	b=b+2*vb;
	if(a<0 || a>500){
		va=va*(-1);
	}
	if(b<0 || b>400){
		vb=vb*(-1);
	}
	//delay(50);
}

function delay(delay){
	var time = millis();
	while(millis()-time<=delay){
	};
}*/

var theta;   
var osc, fft;

function setup() {
  createCanvas(900, 300);
  colorMode(HSB);
  osc = new p5.TriOsc(); 
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(255);
  
  //theta = map(mouseX,0,width,0,PI/2);

  
  translate(width/2, height);
  stroke((mouseX*230)/900,255,255);
  branch(100);
  var waveform = fft.waveform(); 
  var freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
  if(keyIsPressed===false){
  	osc.amp(0);
  }
}

function branch(len) {
  

  var sw = map(len,2,120,1,6);
  strokeWeight(sw);
      
  line(0, 0, 0, -len);
  
  translate(0, -len);

  len *= 0.66;
  
  if (len > 2) {
  	//stroke(map(len,100,18,180,230),255,255);
    push();    
    //rotate(theta);   
    rotate(random(-PI/4,PI/4));
    branch(len);      
    pop();     
    
    push();
    //rotate(-theta);
    rotate(random(-PI/4,PI/4));
    branch(len);
    pop();
  }
}
