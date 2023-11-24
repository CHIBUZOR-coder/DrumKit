//varables
var button = document.querySelectorAll("button");
console.log(button);
var buttonlength = document.querySelectorAll("button").length;
var i = 0;
var defaultColor = "rgb(218,4,99)";

//Adding Eventlistener to buttons using forloop
for (i = 0; i < buttonlength; i++) {
  button[i].addEventListener("click", function random() {
    var buttonHtml = this.innerText; //"this" tells which button triggered the event
    makeSound(buttonHtml);
    // console.log(buttonHtml);
    // console.log(this.innerText);
    AnimationEffect(buttonHtml);
  });
}

//Adding Evenet listener to window to listen for key press
document.addEventListener("keypress", function (e) {
  makeSound(e.key); //passing the pressed key to makesound function for sound making
  //    alert("Key was pressed!");Using alert to test if key that trigger event  was found
   AnimationEffect(e.key); //passing event key to  AnimationEffect functtion that makes animations when key is pressed

});


//this functions collects the key pressed or clicked and triggers the sound associated with that key
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;

    case "a":
      var audio = new Audio("sounds/kick.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/tom4.mp3");
      audio.play();
      break;

    default:
      console.log(buttonHtml);
      break;
  }
}

//Setting Animation effect for when key is pressed or clicked 
function AnimationEffect(event) {
  var change = document.querySelector(`.${event}`);
  change.style.color = "white";
  change.style.boxShadow = "0 3px 4px 0 #DBEDF3";
  change.style.opacity = "0.4";

  setTimeout(function () {
    change.style.color = defaultColor;
    change.style.boxShadow = "none";
    change.style.opacity = "1";
  }, 150);
}



// var a = button[1].addEventListener("click", random);
// var s = button[2].addEventListener("click", random);
// var d = button[3].addEventListener("click", random);
// var j = button[4].addEventListener("click", random);
// var k = button[5].addEventListener("click", random);
// var i = button[6].addEventListener("click", random);
