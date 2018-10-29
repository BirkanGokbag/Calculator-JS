/* Created: 10/29/2018 by Rajeev Ravi
Contributors: Rajeev Ravi,
Contains the javascript for the calculator
*/

var calculatorBase = {
  mainArg: 0, //The main argument usually on the calculator's display.
  hiddenArg:0, //The argument that is hidden and used for the various operations.
  memoryArg:0, //The memory variable
  display: document.getElementById("Display"), //A direct link to the display's html.
  songList: ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"] //Birkan's bad musical taste.
}

/*
Constructor function for the NumberButton. NumberButtons are the 0-9 digits
displayed on the calculator's face.
*/
function NumberButton() {
    this.onClick = function(number){
      /*
        Same functionality as current number buttons, but use the calculatorBase parameters.
      */

    }
}
//The number buttons must have access to all of the parameters in the one calculatorBase object.
NumberButton.prototype = calculatorBase;


var numberButton = NumberButton(); //All of the number buttons can use the functionality of this one.

/*
Constructor function for the OperationButton. OperationButtons are the rest of the
buttons on the calculator's face.
*/
function OperationButton(onClickFunction){
  this.onClick = onClickFunction;
}

//The operation buttons must have access to all of the parameters as well.
OperationButton.prototype = calculatorBase;


//Now, all of the operation buttons need to be created.
