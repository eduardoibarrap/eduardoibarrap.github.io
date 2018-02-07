function preload() {
    soundFormats('mp3');
s1 = loadSound('CadaLugar-EduardoIbarra.mp3');
s2 = loadSound("CAROLINA.mp3");
s3 = loadSound("Te Quiero-Eduardo Ibarra.mp3");
  }

  function playCad() {
      s1.play();
    }   

  function stopCad() {
        s1.stop();
      }    

 function pauseCad() {
        s1.pause();
      }      
    
 function playCa() {
        s2.play();
      }   
  
 function stopCa() {
          s2.stop();
        }    
  
 function pauseCa() {
          s2.pause();
        }   

 function playTe() {
            s3.play();
          }   
      
 function stopTe() {
              s3.stop();
            }    
      
 function pauseTe() {
              s3.pause();
            }   

  function setup() {

    s1.setVolume(0.1);
    s2.setVolume(0.1);
    s3.setVolume(0.1);

    var play1;
    background(0);
    button = createButton('play 1');
    button.position(19, 19);
    button.mousePressed(playCad);

    var stop1;
    background(0);
    button = createButton('stop 1');
    button.position(21,19);
    button.mousePressed(stopCad);

    var pause1;
    background(0);
    button = createButton('pause 1');
    button.position(23, 19);
    button.mousePressed(pauseCad);

    var play2;
    background(0);
    button = createButton('play 2');
    button.position(19, 17);
    button.mousePressed(playCa);

    var stop2;
    background(0);
    button = createButton('stop 2');
    button.position(21,17);
    button.mousePressed(stopCa);

    var pause2;
    background(0);
    button = createButton('pause 2');
    button.position(23, 17);
    button.mousePressed(pauseCa);

    var play3;
    background(0);
    button = createButton('play 3');
    button.position(19, 15);
    button.mousePressed(playTe);

    var stop3;
    background(0);
    button = createButton('stop 3');
    button.position(21,15);
    button.mousePressed(stopTe);

    var pause3;
    background(0);
    button = createButton('pause 3');
    button.position(23, 15);
    button.mousePressed(pauseTe);

  }
  

