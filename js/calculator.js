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
