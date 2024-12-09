console.log("Preload running...");

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "images/openModel.png",
  "images/achmedk.png",
  "images/dmitrip.png",
  "images/amirk.png",
  "images/billL4D.png",
  "images/BybDirections.png",
  "images/chatbox1.png",
  "images/codecolor.png",
  "images/compLab.png",
  "images/danter.png",
  "images/empty.png",
  "images/key.gif",
  "images/kieshap.png",
  "images/l4droom.png",
  "images/lulu.png",
  "images/MapCode.png",
  "images/mikeyt.png",
  "images/petew.png",
  "images/pjzpic.png",
  "images/RealWombat.png",
  "images/teambybpic.png",
  "images/tonyd.png",
  "images/WombatName.png",
  "images/frog.png",
  "images/wrench.png",
  "images/hammer.png",
  "images/BLUEglock.png",
  "images/VentBG.jpg",
  "Sounds/Kiesha 1.wav",
  "Sounds/Kiesha 2.wav",
  "Sounds/Kiesha 3.wav",
  "Sounds/Kiesha 4.wav",
  "Sounds/Achemd 1.wav",
  "Sounds/Achemd 2.wav",
  "Sounds/Achemd 3.wav",
  "Sounds/Amir 1.wav",
  "Sounds/Amir 2.wav",
  "Sounds/Amir 3.wav",
  "Sounds/Amir 4.wav",
  "Sounds/Dmitri 1.wav",
  "Sounds/Dmitri 2.wav",
  "Sounds/Dmitri-3.wav",
  "Sounds/Lulu 1.wav",
  "Sounds/Lulu 2.wav",
  "Sounds/Lulu 3.wav",
  "Sounds/Mikey 1.wav",
  "Sounds/Mikey 2.wav",
  "Sounds/Mikey 3.wav",
  "Sounds/Mikey 4.wav",
  "Sounds/Pete 1.wav",
  "Sounds/Pete 2.wav",
  "Sounds/Pete 3.wav",
  "Sounds/Pete 4.wav",
  "Sounds/Tony 1.wav",
  "Sounds/Tony 2.wav",
  "Sounds/Tony 3.wav"
);
