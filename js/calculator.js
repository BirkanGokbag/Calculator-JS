/*
Created: 10/30 by Rajeev Ravi
*/
var calculator = null;

function createObjects(){
  calculator = new Calculator();
  window.addEventListener("keypress", calculator.keypress.bind(calculator), false);

  //Set all buttons to execute setOperator first
  buttons = document.getElementsByTagName('button');
  for(i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', setOperator, true);
  }

  //add event listeners to the number buttons
  numberButtons = document.getElementsByClassName('number');
  for(i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', calculator.numberClick.bind(calculator), false);
  }

  //add event listeners to the trig buttons
  trigButtons = document.getElementsByClassName('trig');
  for(i = 0; i < trigButtons.length; i++){
    trigButtons[i].addEventListener('click', calculator.trigClick.bind(calculator), false);
  }

  operations = document.getElementsByClassName('operations');
  for(i = 0; i < operations.length; i++){
    operations[i].addEventListener('click', calculator.operationClick.bind(calculator), false);
  }
  
  equals = document.getElementById('equals');
  equals.addEventListener('click', calculator.operationClick.bind(calculator), false);
  
  clears = document.getElementById('clears');
  clears.addEventListener('click', calculator.clearDisplay.bind(calculator), false);
  
  squareroot = document.getElementById('squareroot');
  squareroot.addEventListener('click', calculator.squareroot.bind(calculator), false);
  
  Percent = document.getElementById('percent');
  Percent.addEventListener('click', calculator.percent.bind(calculator), false);
  
  changesign = document.getElementById('changesign');
  changesign.addEventListener('click', calculator.changeSign.bind(calculator), false);
  
  clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', calculator.clearCompeletely.bind(calculator), false);

  factorial = document.getElementById('factorial');
  factorial.addEventListener('click', calculator.factorial.bind(calculator), false);

  log = document.getElementById('log');
  log.addEventListener('click', calculator.logarithmic.bind(calculator), false);

  memoryButtons = document.getElementsByClassName('memory');
  for(i=0; i<memoryButtons.length; i++){
    memoryButtons[i].addEventListener('click',calculator.memoryClick.bind(calculator),false);
  }
}

function setOperator(){
  calculator.operator = this.innerHTML;
}

/*
Author: Rajeev Ravi
The constructer of the main calculator object to be used in the project.
*/
function Calculator(){
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
    if(this.mainArg.toString().length > this.display.clientWidth/17){
      this.display.innerHTML = this.mainArg.toExponential();
    }else{
      this.display.innerHTML = this.mainArg;
    }
  },

  /*
  Author: Alyssa Langhals
  handles the entry of numbers and updates the display
  */
  numberClick: function(){
      display = this.display.innerHTML;
      number = this.operator;
      if(display.length < this.display.clientWidth/17 || this.clearScreen){
        if(display.toString() == "0" && number != '.' || this.clearScreen){
          this.display.innerHTML = number;
        }else if(number == '.' && display.indexOf(number) == -1){
          this.display.innerHTML = display+ number;
        }else if(number != '.'){
          this.display.innerHTML = display + number;
        }
        this.clearScreen = false;
        this.mainArg = parseFloat(this.display.innerHTML);
      }
  },

  /*
  Author: Michael Radey
  This method will update the calcultor's screen when a number button is typed
  */
  keypress: function(e){
    var key = e.which || e.keyCode;
    var keyCode = String.fromCharCode(key);
    keyCode = key == '13' ? "=" : keyCode;
    numbers = "1234567890.";
    operators = "+-/*=^";
    this.operator = keyCode;

    if(numbers.includes(this.operator)){
      this.numberClick();
    }
    else if(operators.includes(this.operator)){
      if(this.operator == '^'){
        this.operator = 'x^y';
      }
      this.operationClick();
    }

  },

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
        this.updateDisplay.bind(this).call();
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
  },

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
     this.updateDisplay().bind(this).call();
     this.clearScreen = true;
   },

/*
   Author: Birkan Gokbag
   This method will clear the calculator completely.
 */
 clearCompeletely: function() {
     //Clear the display, and all the arguments.
     this.hiddenArg = 0;
     this.memoryArg = 0;
     this.mainArg = 0;
     this.operator = undefined;
     this.clearScreen = false;
     this.updateDisplay.bind(this).call();
   },


  /*
    Author: Berkay Kaplan
    The function that handles the operations that require at least two numbers, such as +, -, /, *
  */
  operationClick: function (){
  // Check if the user entered an operation before
  if((this.hiddenArg==undefined && this.previousOperator == undefined) || this.clearScreen){
    this.hiddenArg = this.mainArg;
  }else{

    // See what operation the user entered
    switch(this.previousOperator){
      case '-':
        this.hiddenArg = this.hiddenArg - this.mainArg;
        break;
      case '+':
        this.hiddenArg = this.hiddenArg + this.mainArg;
        break;
      case '*':
        this.hiddenArg = this.hiddenArg*this.mainArg;
        break;
      case '/':
      	if(this.mainArg!==0){
      	    this.hiddenArg = this.hiddenArg/this.mainArg;
      	}else{
      	    this.hiddenArg = "Cannot divide a number by 0";
      	}
        break;
      case 'x^y':
        this.hiddenArg = Math.pow(this.hiddenArg, this.mainArg);
      break;
    }
    this.mainArg = this.hiddenArg;
    this.updateDisplay.bind(this).call();

  }

  this.previousOperator = this.operator;

  if(this.operator == '='){
    this.previousOperator = undefined;
    this.hiddenArg = undefined;
  }
  this.clearScreen = true;
},

  /*
    Author: Berkay Kaplan
    Clears the screen to 0
  */
  clearDisplay: function(){
    this.mainArg = 0;
    this.updateDisplay.bind(this).call();
  },

  /*
    Author: Berkay Kaplan
    Takes the percent of the hidden argument
  */
  percent: function(){
  if(this.previousOperator != undefined){
    this.mainArg = (this.hiddenArg/100)*this.mainArg;
  }else{
    this.mainArg = "0";
  }
  this.updateDisplay.bind(this).call();
},
  /*
  Author: Birkan Gokbag
  This method will define the functionality of log button.
  */
  logarithmic: function() {
    //If the number is negative or 0, then cannot get the log of the value
    if (this.mainArg <= 0){
      this.mainArg = "Not A Number."
    }
    else{
      this.mainArg = Math.log(this.mainArg);
    }
    //Log operation had happened, therefore set clearScreen to true
    this.clearScreen = true;
    this.updateDisplay.bind(this).call();

  },

  /*
    Author: Birkan Gokbag
    This method will define the functionality of factorial button.
  */
  factorial: function(){
    //If it is not a total value, then display Not a Number.
    if (this.mainArg % 1 == 0) {
      result = 1;
      //If the result is not 0, then proceed to calculate it.
      if (this.mainArg != 0) {
        tempVariable = this.mainArg;
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
      this.updateDisplay.bind(this).call();
    } else {
        this.mainArg = "Not A Number.";
    }
    //The next press will clear out the display if its a number
    this.clearScreen = true;
    this.updateDisplay.bind(this).call();

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
  squareroot: function(){
    Number = parseFloat(this.mainArg);
      if(Number>0){
        this.mainArg=Math.sqrt(Number);
      }
    this.clearScreen = true;
    this.updateDisplay.bind(this).call();
    },


  /*
    Changes the sign of the number on the screen
  */
  changeSign: function(){
    this.mainArg=parseFloat(-this.mainArg);
    this.clearScreen = true;
    this.updateDisplay.bind(this).call();
  }

 }
