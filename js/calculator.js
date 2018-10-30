/*
Created: 10/30 by Rajeev Ravi
*/

function createObjects(){
  var calculator = new Calculator();
  

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
  this.display =  document.getElementById("display"); //A direct link to the display's html.
  this.clearScreen = false; //Check if the screen needs to be cleared.
  this.songList =  ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"]; //Birkan's god awful musical taste.
}


Calculator.prototype = {
  updateDisplay:

  numberClick:

  keypress:

  operationClick:

  memoryClick:

  clear:

  clearEntry:
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
        this.lastNumber = this.lastNumber/parseFloat(calculator.display.innerHTML);
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
