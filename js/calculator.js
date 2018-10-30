/*
Created: 10/30 by Rajeev Ravi
*/

function createObjects(){
  var calculator = new Calculator();

  //Set all buttons to execute setOperator first
  buttons = document.getElementsByTagName('button');
  for(i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', setOperator, true);
  }

  //add event listeners to the number buttons
  numberButtons = document.getElementsByClassName('number');
  for(i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', Calculator.numberClick, false);
  }

  //add event listeners to the trig buttons
  trigButtons = document.getElementsByClassName('trig');
  for(i = 0; i < trigButtons.length; i++){
    trigButtons[i].addEventListener('click', Calculator.trigClick, false);
  }


}

function setOperator(){
}

/*
Author: Rajeev Ravi
The constructer of the main calculator object to be used in the project.
*/
var Calculator = function(){
  this.mainArg = 0; //The main argument usually on the calculator's display.
  this.hiddenArg = 0; //The argument that is hidden and used for the various operations.
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
      this.display.innerHTML = this.mainArgvalue;
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

  keypress:

  memoryClick:

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
     this.updateDisplay();
     this.clearScreen = true;
   },

/*
   Author: Birkan Gokbag
   This method will clear the calculator completely.
 */
 clearCompeletely: function() {
     //Clear the display, and all the arguments.
     this.display.innerHTML = 0;
     this.hiddenArg = 0;
     this.memoryArg = 0;
     this.mainArg = 0;
     this.operator = undefined;
     this.clearScreen = false;
   },

  clearEntry:

  /*
    Author: Berkay Kaplan
    The function that handles the operations that require at least two numbers, such as +, -, /, *
  */
  operationClick: function operationClick(){
  // Check if the user entered an operation before
  if((calculator.hiddenArgument==undefined && calculator.previousOperator == undefined) || calculator.clearScreen){
    calculator.hiddenArgument = parseFloat(calculator.display.innerHTML);
  }else{

    // See what operation the user entered
    switch(calculator.previousOperator){
      case '-':
        calculator.hiddenArgument = calculator.hiddenArgument - parseFloat(calculator.display.innerHTML);
        break;
      case '+':
        calculator.hiddenArgument = calculator.hiddenArgument + parseFloat(calculator.display.innerHTML);
        break;
      case '*':
        calculator.hiddenArgument = calculator.hiddenArgument*parseFloat(calculator.display.innerHTML);
        break;
      case '/':
	if(parseFloat(calculator.display.innerHTML)!==0){
	    calculator.hiddenArgument = calculator.hiddenArgument/parseFloat(calculator.display.innerHTML);
	}else{
	    calculator.hiddenArgument = "Cannot divide a number by 0";
	}
        break;
    }
    calculator.display.innerHTML = calculator.hiddenArgument;
  }

  calculator.previousOperator = calculator.operation;

  if(operation == '='){
    calculator.previousOperator = undefined;
    calculator.hiddenArgument = undefined;
  }
  calculator.clearScreen = true;
},

  memoryClick:

  /*
    Author: Berkay Kaplan
    Clears the screen to 0
  */
  clearDisplay: function clearDisplay(){
  calculator.display.innerHTML = "0";
}

  /*
    Author: Berkay Kaplan
    Takes the percent of the hidden argument
  */
  percent: function percent(){
  if(calculator.previousOperator != undefined){
    percent = calculator.display.innerHTML;
    calculator.display.innerHTML = (calculator.hiddenArgument/100)*percent;
  }else{
    calculator.display.innerHTML = "0";
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
      this.display.innerHTML = "Not A Number."
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
      this.updateDisplay;
    } else {
        this.display.innerHTML = "Not A Number.";
    }
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
    Number = parseFloat(calculator.display.innerHTML);
      if(Number>0){
        calculator.display.innerHTML=Math.sqrt(Number);
      }
    calculator.clearScreen = true;
    }
  },

  /*
    Changes the sign of the number on the screen
  */
  changeSign: function changeSign(){
    calculator.display.innerHTML=parseFloat(-calculator.display.innerHTML);
  }

}
