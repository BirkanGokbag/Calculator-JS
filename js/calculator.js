/* Created: 10/29/2018 by Rajeev Ravi
Contributors: Rajeev Ravi, Alyssa Langhals, Birkan Gokbag, Berkay Kaplan, Michael Radey
Contains the javascript for the calculator
*/


var calculatorBase = null;

function createObjects(){
  calculatorBase = {
  mainArg: 0, //The main argument usually on the calculator's display.
  hiddenArg:0, //The argument that is hidden and used for the various operations.
  memoryArg:0, //The memory variable
  display: document.getElementById("display"), //A direct link to the display's html.
  clearScreen:false,
  songList: ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"] //Birkan's bad musical taste.
}
  //The number buttons must have access to all of the parameters in the one calculatorBase object.
  NumberButton.prototype = calculatorBase;

  //The operation buttons must have access to all of the parameters as well.
OperationButton.prototype = calculatorBase;
  
  //create the number buttons
  numberButtons = document.getElementsByClassName('number');
  for(i = 0; i < numberButtons.length; i++){ 
    NumberButton(numberButtons[i]); 
  }

  //All of the operation buttons created.
  trigButtons = document.getElementsByClassName('trig');
  for(i = 0; i < trigButtons.length; i++){ 
    OperationButton(trigButtons[i],trigClick); 
  }
}


/*
Author: Alyssa Langhals
Constructor function for the NumberButton. NumberButtons are the 0-9 digits
displayed on the calculator's face.
*/
function NumberButton(htmlElement) {
    
    htmlElement.onclick = function(){
      
      display = calculatorBase.display.innerHTML;
      number = htmlElement.innerHTML;
      if(display.length < calculatorBase.display.clientWidth/17 || calculatorBase.clearScreen){
        if(display.toString() == "0" && number != '.' || calculatorBase.clearScreen){
          calculatorBase.display.innerHTML = number;
        }else if(number == '.' && display.indexOf(number) == -1){
          calculatorBase.display.innerHTML = display+ number;
        }else if(number != '.'){
          calculatorBase.display.innerHTML = display + number;
        }
        calculatorBase.clearScreen = false;
        calculatorBase.mainArg = parseFloat(calculatorBase.display.innerHTML);
      }

    }
}

/*
Constructor function for the OperationButton. OperationButtons are the rest of the
buttons on the calculator's face.
*/
function OperationButton(htmlElement,onClickFunction){
  htmlElement.onclick = onClickFunction;
}

/*
  Author: Alyssa Langhals
  This function will update the display and check if the displayed number should be in exponential form to fit onto the display screen
*/
function updateDisplay(value){
  if(value.toString().length > calculatorBase.display.clientWidth/17){
    calculatorBase.display.innerHTML = value.toExponential();
  }else{
    calculatorBase.display.innerHTML = value;
  }
}

/*
  Author: Alyssa Langhals
  This method will update the calcultor's screen with the result when a trig button is pressesd
*/
function trigClick(){
  switch(this.innerHTML){
    case 'sin':
      calculatorBase.mainArg=Math.sin(calculatorBase.mainArg);
      break;
    case 'cos':
      calculatorBase.mainArg=Math.cos(calculatorBase.mainArg);
      break;
    case 'tan':
      calculatorBase.mainArg=Math.tan(calculatorBase.mainArg);
      break;
    case 'pi':
      calculatorBase.mainArg=Math.PI;
      break;
   }
   updateDisplay(calculatorBase.mainArg);
   calculatorBase.clearScreen = true;
 }

