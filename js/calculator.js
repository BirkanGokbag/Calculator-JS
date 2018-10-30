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
  this.previousOperator = undefined;
  this.display =  document.getElementById("display"); //A direct link to the display's html.
  this.clearScreen = false; //Check if the screen needs to be cleared.
  this.songList =  ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"]; //Birkan's god awful musical taste.
}


Calculator.prototype = {
  updateDisplay:

  numberClick:

  keypress:

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
}

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
  if(calculator.hiddenArgument != undefined){
    percent = calculator.display.innerHTML;
    calculator.display.innerHTML = (calculator.hiddenArgument/100)*percent;
  }else{
    calculator.display.innerHTML = "0";
  }
}
  
  /*
    Changes the sign of the number on the screen
  */
  changeSign: function changeSign(){
    calculator.display.innerHTML=parseFloat(-calculator.display.innerHTML);
  }

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

  clearEntry:
}











