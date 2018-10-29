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
  this.clearScreen = undefined;
  this.currentMem = 0;
  this.display = document.getElementById("display");
  this.songList = ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"]
}

var calculator;
function createObj(){
  this.calculator = new Calculator(); //Creates the main calculator object.

  //Add event listeners
  numberButtons = document.getElementsByClassName("number");
  for(i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numberClick);
  };
  trigButtons = document.getElementsByClassName("trig");
  for(i = 0; i < trigButtons.length; i++) {
    trigButtons[i].addEventListener("click", trigClick);
  };
  window.addEventListener("keypress", keyPress, false);

}
  
   

/*
  Author: Alyssa Langhals
  This method will update the calcultor's screen when a number button is pressesd
*/
function numberClick(e, num){
  display = calculator.display.innerHTML;
  number = num || this.innerHTML;
  if(display.length < calculator.display.clientWidth/17 || calculator.clearScreen){
    if(display.toString() == "0" && number != '.' || calculator.clearScreen){
      calculator.display.innerHTML = number;
    }else if(number == '.' && display.indexOf(number) == -1){
      calculator.display.innerHTML = display+ number;
    }else if(number != '.'){
      calculator.display.innerHTML = display + number;
    }
    calculator.clearScreen = false;
  }
}

/*
  Author: Michael Radey
  This method will update the calcultor's screen when a number button is typed
*/
function keyPress(e){
  var key = e.which || e.keyCode;
  var keyCode = String.fromCharCode(key);
  keyCode = key == '13' ? "=" : keyCode;
  numbers = "1234567890";
  operators = "+-/*=";
  if(numbers.includes(keyCode)){
    numberClick(e,keyCode);
  }
  else if(operators.includes(keyCode)){
    operationClick(keyCode);
  }

}

/*
  Author: Alyssa Langhals
  This function will update the display and check if the displayed number should be in exponential form to fit onto the display screen
*/
function updateDisplay(value){
  if(value.toString().length > calculator.display.clientWidth/17){
    calculator.display.innerHTML = value.toExponential();
  }else{
    calculator.display.innerHTML = value;
  }
  this.hey = number;
}

/*
  Author: Berkay Kaplan
  The function that handles the operations that require at least two numbers, such as +, -, /, *
*/
function operationClick(operation){
  // Check if the user entered an operation before
  if((this.lastNumber==undefined && this.lastOperation == undefined) || calculator.clearScreen){
    this.lastNumber = parseFloat(calculator.display.innerHTML);
  }else{

    // See what operation the user entered
    switch(this.lastOperation){
      case '-':
        this.lastNumber = this.lastNumber - parseFloat(calculator.display.innerHTML);
        break;
      case '+':
        this.lastNumber = this.lastNumber + parseFloat(calculator.display.innerHTML);
        break;
      case '*':
        this.lastNumber = this.lastNumber*parseFloat(calculator.display.innerHTML);
        break;
      case '/':
	if(parseFloat(calculator.display.innerHTML)!==0){
	    this.lastNumber = this.lastNumber/parseFloat(calculator.display.innerHTML);
	}else{
	    this.lastNumber = "Cannot divide a number by 0";
	}
        
        break;
    }
    calculator.display.innerHTML = this.lastNumber;
  }

  this.lastOperation = operation;

  if(operation == '='){
    this.lastOperation = undefined;
    this.lastNumber = undefined;
  }
  calculator.clearScreen = true;
}

/*
  Author: Berkay Kaplan
  Clears the screen to 0
*/
function clearDisplay(){
  calculator.display.innerHTML = "0";
}

/*
  Author: Berkay Kaplan
  Takes the percent of the last number
*/
function percent(){
  if(this.lastOperation != undefined){
    percent = calculator.display.innerHTML;
    calculator.display.innerHTML = (this.lastNumber/100)*percent;
  }else{
    calculator.display.innerHTML = "0";
  }
}


/*
  Author: Berkay Kaplan
  Takes the squareroot of the number on the screen
*/
function squareroot(){
  Number = parseFloat(calculator.display.innerHTML);
  if(Number>0){
    calculator.display.innerHTML=Math.sqrt(Number);
  }
  calculator.clearScreen = true;
}

/*
  Author: Alyssa Langhals
  This method will update the calcultor's screen with the result when a trig button is pressesd
*/
function trigClick(){
  Number = parseFloat(calculator.display.innerHTML);
  switch(this.innerHTML){
    case 'sin':
      calculator.display.innerHTML=Math.sin(Number);
      break;
    case 'cos':
      calculator.display.innerHTML=Math.cos(Number);
      break;
    case 'tan':
      calculator.display.innerHTML=Math.tan(Number);
      break;
    case 'pi':
      calculator.display.innerHTML=Math.PI;
      break;
   }
   calculator.clearScreen = true;
 }

// Changes the sign of the number on the screen
function changeSign(){
  calculator.display.innerHTML=parseFloat(-calculator.display.innerHTML);
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
