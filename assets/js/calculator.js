/* Created: 10/23/2018
   Contributors: Alyssa Langhals, Berkay Kaplan, Birkan Gokbag, Rajeev
Contains the javascript for the calculator
*/



/* Author: Rajeev Ravi
Contains the constructor function for the calculator button.
*/
function Calculator(){
  this.mainArgument = 0;
  this.hiddenArgument = 0;
  this.operator = undefined;
  this.currentMem = 0;
  this.display = document.getElementById("display");
  this.songList = ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"]
}

var calculator;
function createObj(){
 this.calculator = new Calculator(); //Creates the main calculator object.
}
/*
  Author: Alyssa Langhals
  This method will update the calcultor's screen when a number button is pressesd
*/
function numberClick(number){

  display = calculator.display.innerHTML;

  if(display.length < calculator.display.clientWidth/17 || this.clearScreen){
    if(display.toString() == "0" && number != '.' || this.clearScreen){
      calculator.display.innerHTML = number;
    }else if(number == '.' && display.indexOf(number) == -1){
      calculator.display.innerHTML = display+ number;
    }else if(number != '.'){
      calculator.display.innerHTML = display + number;
    }
    this.clearScreen = false;
  }
}
/*
  Author: Michael Radey
  This method will update the calcultor's screen when a number button is typed
*/
function myFunction(event) {
    var key = event.which;
    if(48 <= key && key <= 57){
      numberClick(key-48);
    }
}

/*
  Author: Alyssa Langhals
  This function will update the display and check if the displayed number should be in exponential form to fit onto the display screen
*/
function updateDisplay(value){
  if(value.toString().length > document.getElementById("display").clientWidth/17){
    document.getElementById("display").innerHTML = value.toExponential();
  }else{
    document.getElementById("display").innerHTML = value;
  }
}

/*
  Author: Berkay Kaplan
  The function that handles the operations that require at least two numbers, such as +, -, /, *
*/
function operationClick(operation){

  // Check if the user entered an operation before
  if((this.lastNumber==undefined && this.lastOperation == undefined) || this.clearScreen){
    this.lastNumber = parseFloat(document.getElementById("display").innerHTML);
  }else{

    // See what operation the user entered
    switch(this.lastOperation){
      case '-':
        this.lastNumber = this.lastNumber - parseFloat(document.getElementById("display").innerHTML);
        break;
      case '+':
        this.lastNumber = this.lastNumber + parseFloat(document.getElementById("display").innerHTML);
        break;
      case '*':
        this.lastNumber = this.lastNumber*parseFloat(document.getElementById("display").innerHTML);
        break;
      case '/':
        this.lastNumber = this.lastNumber/parseFloat(document.getElementById("display").innerHTML);
        break;
    }
    document.getElementById("display").innerHTML = this.lastNumber;
  }

  this.lastOperation = operation;   

  if(operation == '='){
    this.lastOperation = undefined;
    this.lastNumber = undefined;
  }
  this.clearScreen = true;
}

/*
  Author: Berkay Kaplan
  Clears the screen to 0
*/
function clearDisplay(){
  document.getElementById("display").innerHTML = "0";
}

function percent(){
  if(this.lastOperation != undefined){
    percent = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = (this.lastNumber/100)*percent;
  }else{
    document.getElementById("display").innerHTML = "0";
  }
}

/*
  Author: Birkan Gokbag
  Shuffles the song that is playing on the website
*/
function shuffleSong() {
  //Get the Id of the music player and its source.
  var musicPlayer = document.getElementById("musicPlayer");
  var musicSource = document.getElementById("musicSource");
  //Stop the music
  musicPlayer.pause();
  musicPlayer.currentTime = 0;
  //Get a random song
  randomSong = Math.floor(Math.random() * calculator.songList.length);
  console.log(randomSong);
  musicSource.src = "./assets/images_and_sounds/" + calculator.songList[randomSong];
  //Play the song
  musicPlayer.load();
  musicPlayer.play();
}
/*
  Author: Berkay Kaplan
  Takes the squareroot of the number on the screen
*/
function squareroot(){
  Number = parseFloat(document.getElementById("display").innerHTML);
  if(Number>0){
    document.getElementById("display").innerHTML=Math.sqrt(Number);
  }
  this.clearScreen = true;
}


// Changes the sign of the number on the screen
function changeSign(){
  document.getElementById("display").innerHTML=parseFloat(-document.getElementById("display").innerHTML);
}