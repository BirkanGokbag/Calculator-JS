/* Created: 10/23/2018
   Contributors: Alyssa Langhals
Contains the javascript for the calculator
*/

/* 
  Author: Alyssa Langhals
  This method will update the calcultor's screen when a number button is pressesd
*/
function numberClick(number){
  
  display = document.getElementById("display").innerHTML;
  if(display.length < 17){
    if(display.toString() == "0" && number != '.' || this.clearScreen){
      document.getElementById("display").innerHTML = number;   
    }else if(number == '.' && display.indexOf(number) == -1){
      document.getElementById("display").innerHTML = display+ number;
    }else if(number != '.'){
      document.getElementById("display").innerHTML = display + number;
    }
    this.clearScreen = false;
  }
}

//The function that handles the operations that require at least two numbers, such as +, -, /, *
function operationClick(operation){

  this.clearScreen = true;

  // Check if the user entered an operation before
  if(this.lastNumber==undefined && this.lastOperation == undefined){
    this.lastNumber = parseFloat(document.getElementById("display").innerHTML);
  }else{

    // See what operation the user entered
    switch(this.lastOperation){
      case '-':
      this.lastNumber = this.lastNumber - parseFloat(document.getElementById("display").innerHTML);
      break;
      case '+':
      this.lastNumber = this.lastNumber + parseFloat(document.getElementById("display").innerHTML);
      break;
      case '*':
      this.lastNumber = this.lastNumber*parseFloat(document.getElementById("display").innerHTML);
      break;
      case '/':
      this.lastNumber = this.lastNumber/parseFloat(document.getElementById("display").innerHTML);
      break;
      default:
      this.lastNumber = undefined;
      this.lastOperation = undefined;
      break;
    }
    document.getElementById("display").innerHTML = this.lastNumber;
  }
  this.lastOperation = operation;
}


// Clears the screen to 0
function clearDisplay(){
  document.getElementById("display").innerHTML = "0"; 
}

// Takes the squareroot of the number on the screen
function squareroot(){
  Number = parseFloat(document.getElementById("display").innerHTML);
  if(Number>0){
    document.getElementById("display").innerHTML=Math.sqrt(Number);
  }
}


// Changes the sign of the number on the screen
function changeSign(){
  document.getElementById("display").innerHTML=parseFloat(-document.getElementById("display").innerHTML);
}