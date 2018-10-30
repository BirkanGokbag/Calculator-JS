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

  operationClick:

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


  clear:

  clearEntry:
}
