
var osc;
var env;
var slider;
function setup(){

    env=new p5.Env(0.01,0.2,0.5,1);

osc=new p5.Oscillator();
osc.amp(env);
//osc.freq(222);
osc.setType('triangle');
osc.start();
slider = createSlider(0, 255, 100);
  slider.position(200, 200);
  slider.style('width', '80px');
}

function draw(){
   
    
    var val = slider.value();
    //background(val);
    //osc.amp(mouseX/800);
    //osc.freq(mouseY*4);  
    
    env.setRange(slider.value(), 0);

}

function keyPressed(){
    ellipse(56, 46, 55, 55);
    console.log("You pressed the key"+ key);
    var fr=0.0;
    switch(key){
        case "Q":
        fr=261.6
        break;
        case "2":
        fr=277.2;
        break;
        case "W":
        fr=293.7;
        break;
        case "3":
        fr=311.1;
        break;
        case "E":
        fr=329.6;
        break;
        case "R":
        fr=349.2;
        break;
        case "5":
        fr=370;
        break;
        case "T":
        fr=392;
        break;
        case "6":
        fr=415.3;
        break;
        case "Y":
        fr=440;
        break;
        case "7":
        fr=466.2;
        break;
        case "U":
        fr=493.9;
        break;
        case "Z":
        fr=523.3;
        break;
        case "S":
        fr=554.4;
        break; 
        case "X":
        fr=587.3;
        break;
        case "D":
        fr=622.3;
        break;
        case "C":
        fr=659.3;
        break;
        case "V":
        fr=698.5;
        break;
        case "G":
        fr=740;
        break;
        case "B":
        fr=784;
        break;
        case "H":
        fr=830.6;
        break;
        case "N":
        fr=880;
        break;
        case "J":
        fr=932.3;
        break;  
        case "M":
        fr=987.8;
        break;                         
    }
    console.log(fr);
    osc.freq(fr);
    env.triggerAttack();
    
}

function keyReleased(){
    background(255);
    console.log("You released the key"+ key);
    //osc.stop();
    env.triggerRelease();
}


