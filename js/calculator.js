/*
Created: 10/30 by Rajeev Ravi
*/
var calculator = null;
function createObjects(){
  calculator = new Calculator();

  window.addEventListener("keypress", calculator.keyPress, false);

  //Set all buttons to execute setOperator first
  buttons = document.getElementsByTagName('button');
  for(i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', calculator.setOperator, true);
  }

  //add event listeners to the number buttons
  numberButtons = document.getElementsByClassName('number');
  for(i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', calculator.numberClick, false);
  }

  //add event listeners to the trig buttons
  trigButtons = document.getElementsByClassName('trig');
  for(i = 0; i < trigButtons.length; i++){
    trigButtons[i].addEventListener('click', calculator.trigClick, false);
  }

  // Create the log button and assign it to the logarithmic function
  document.getElementById("log").addEventListener("click", calculator.logarithmic, false);
  // Create the clear button.
  document.getElementById("clearButton").addEventListener("click", calculator.learCalculator, false);
  // Create the factorial button.
  document.getElementById("factorial").addEventListener("click", calculator.factorial, false);

  document.getElementById("shuffle").addEventListener("click", calculator.shuffleSong, false);

}

function setOperator(calculator){
  calculator.operator = this.innerHTML;
}

/*
Author: Rajeev Ravi
The constructer of the main calculator object to be used in the project.
*/
var Calculator = function(){
  this.mainArg = 0; //The main argument usually on the calculator's display.
  this.hiddenArg = undefined; //The argument that is hidden and used for the various operations.
  this.memoryArg = 0; //The memory variable
  this.operator = undefined; //The name of the operator to be executed.
  this.previousOperator = undefined;
  this.display =  document.getElementById("display"); //A direct link to the display's html.
  this.clearScreen = false; //Check if the screen needs to be cleared.
  this.songList =  ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"];
}


Calculator.prototype = {
  /*
  Author: Alyssa Langhals
  This function will update the display and check if the displayed number should be in exponential form to fit onto the display screen
  */
  updateDisplay: function(){

    if(value.toString().length > this.display.clientWidth/17){
      this.display.innerHTML = this.mainArg.toExponential();
    }else{
      this.display.innerHTML = this.mainArg;
    }
  },

  /*
  Author: Alyssa Langhals
  handles the entry of numbers and updates the display
  */
  numberClick:function(){

    display = document.getElementById("display").innerHTML;
    number = this.operator;
    if(display.length < 17){
      if(display.toString() == "0" && number != '.'){
        document.getElementById("display").innerHTML = number;
      }else if(number == '.' && display.indexOf(number) == -1){
        document.getElementById("display").innerHTML = display+ number;
      }else if(number != '.'){
        document.getElementById("display").innerHTML = display + number;
      }
    }
  },

  /*
  Author: Michael Radey
  This method will update the calcultor's screen when a number button is typed
  */
  keypress: function keyPress(e){
    var key = e.which || e.keyCode;
    var keyCode = String.fromCharCode(key);
    keyCode = key == '13' ? "=" : keyCode;
    numbers = "1234567890.";
    operators = "+-/*=";
    this.operator = this.operator == "p" && keyCode == "i" ? this.operator = "pi" : keyCode;
    if(numbers.includes(this.operator)){
      this.numberClick();
    }
    else if(operators.includes(this.operator)){
      this.operationClick();
    }
    else if(keyCode == "pi"){

    }
  }

  /*
  Author: Rajeev Ravi
  Contains the functionality for the memory buttons.
  */
  memoryClick: function(){
    switch(this.operator){
      case 'MC':
      this.memoryArg = 0;
      break;
      case 'MR':
      this.mainArg = this.memoryArg;
      this.updateDisplay;
      break;
      case 'M-':
      this.memoryArg -= this.mainArg;
      break;
      case 'M+':
      this.memoryArg += this.mainArg;
      break;
      case 'MS':
      this.memoryArg = this.mainArg;
    }
  }

  /*
  Author: Alyssa Langhals
  This method will update the calcultor's screen with the result when a trig button is pressesd
  */
  trigClick: function(){

    switch(this.operator){
      case 'sin':
        this.mainArg=Math.sin(this.mainArg);
        break;
      case 'cos':
        this.mainArg=Math.cos(this.mainArg);
        break;
      case 'tan':
        this.mainArg=Math.tan(this.mainArg);
        break;
      case 'pi':
        this.mainArg=Math.PI;
        break;
     }
     this.updateDisplay;
     this.clearScreen = true;
   },

/*
   Author: Birkan Gokbag
   This method will clear the calculator completely.
 */
 clearCompeletely: function() {
     //Clear the display, and all the arguments.
     this.display.innerHTML = 0;
     this.mainArg = 0;
     this.hiddenArg = undefined;
     this.memoryArg = 0;
     this.operator = undefined;
     this.previousOperator = undefined;
     this.clearScreen = false;
   },

  /*
    Author: Berkay Kaplan
    The function that handles the operations that require at least two numbers, such as +, -, /, *
  */
  operationClick: function operationClick(){
  // Check if the user entered an operation before
  if((this.hiddenArg==undefined && this.previousOperator == undefined) || this.clearScreen){
    this.hiddenArg = parseFloat(this.mainArg);
  }else{

    // See what operation the user entered
    switch(this.previousOperator){
      case '-':
        this.hiddenArg = this.hiddenArg - parseFloat(this.mainArg);
        break;
      case '+':
        this.hiddenArg = this.hiddenArg + parseFloat(this.mainArg);
        break;
      case '*':
        this.hiddenArg = this.hiddenArg*parseFloat(this.mainArg);
        break;
      case '/':
      	if(parseFloat(this.mainArg)!==0){
      	    this.hiddenArg = this.hiddenArg/parseFloat(this.mainArg);
      	}else{
      	    this.hiddenArg = "Cannot divide a number by 0";
      	}
        break;
    }
    this.mainArg = this.hiddenArg;
  }

  this.previousOperator = this.operation;

  if(operation == '='){
    this.previousOperator = undefined;
    this.hiddenArg = undefined;
  }
  this.clearScreen = true;
},

  /*
    Author: Berkay Kaplan
    Clears the screen to 0
  */
  clearDisplay: function clearDisplay(){
    this.mainArg = "0";
  }

  /*
    Author: Berkay Kaplan
    Takes the percent of the hidden argument
  */
  percent: function percent(){
  if(this.previousOperator != undefined){
    percent = this.mainArg;
    this.mainArg = (this.hiddenArg/100)*percent;
  }else{
    this.mainArg = "0";
  }
},
  /*
  Author: Birkan Gokbag
  This method will define the functionality of log button.
  */
  logarithmic: function() {
    valueInDisplay = parseFloat(document.getElementById("display").innerHTML);
    //If the number is negative or 0, then cannot get the log of the value
    if (valueInDisplay <= 0){
      this.mainArg = "Not A Number."
    }
    else{
      this.mainArg = Math.log(parseFloat(document.getElementById("display").innerHTML));
      this.updateDisplay;
    }
    //Log operation had happened, therefore set clearScreen to true
    this.clearScreen = true;
  },

  /*
    Author: Birkan Gokbag
    This method will define the functionality of factorial button.
  */
  factorial: function(){
    //Get the current value from the display
    displayValue = this.display.innerHTML;

    //If it is not a total value, then display Not a Number.
    if (displayValue % 1 == 0) {
      result = 1;
      //If the result is not 0, then proceed to calculate it.
      if (displayValue != 0) {
        tempVariable = displayValue;
        //If the number is negative, make it positive and make result negative.
        if (tempVariable < 0) {
          tempVariable = tempVariable * -1;
          result = -1;
        }
        //Get the result from here
        while (tempVariable != 0) {
          result = result * tempVariable;
          tempVariable--;
        }
      }
      // Add it to the main arg.
      this.mainArg = result;
    } else {
        this.mainArg = "Not A Number.";
    }
    this.updateDisplay;
    //The next press will clear out the display if its a number
    this.clearScreen = true;
  },

  /*
    Author: Birkan Gokbag
    This method will have the song suffling functionality.
  */
  shuffleSong: function(){
    //Get the Id of the music player and its source.
    var musicPlayer = document.getElementById("musicPlayer");
    var musicSource = document.getElementById("musicSource");
    //Stop the music
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
    //Get a random song
    randomSong = Math.floor(Math.random() * this.songList.length);
    musicSource.src = "./assets/images_and_sounds/" + this.songList[randomSong];
    //Play the song
    musicPlayer.load();
    musicPlayer.play();
  },

  /*
    Author: Berkay Kaplan
    Takes the squareroot of the number on the screen
  */
  squareroot: function squareroot(){
    Number = parseFloat(this.mainArg);
      if(Number>0){
        this.mainArg=Math.sqrt(Number);
      }
    this.clearScreen = true;
    }
  },

  /*
    Changes the sign of the number on the screen
  */
  changeSign: function changeSign(){
    this.mainArg=parseFloat(-this.mainArg);
  }

}
