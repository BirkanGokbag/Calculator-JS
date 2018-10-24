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
    if(display.toString() == "0" && number != '.'){
      document.getElementById("display").innerHTML = number;   
    }else if(number == '.' && display.indexOf(number) == -1){
      document.getElementById("display").innerHTML = display+ number;
    }else if(number != '.'){
      document.getElementById("display").innerHTML = display + number;
    }
  }
}

function operationClick(operation){
  this.lastNumber = parseFloat(document.getElementById("display").innerHTML);
  this.lastOperation = operation;
  document.getElementById("display").innerHTML = 0;
}

function squareroot(){
  Number = parseFloat(document.getElementById("display").innerHTML);
  if(Number>0){
    document.getElementById("display").innerHTML=Math.sqrt(Number);
  }
}

function changeSign(){
  document.getElementById("display").innerHTML=parseFloat(-document.getElementById("display").innerHTML);
}

function clear(){
  document.getElementById("display").innerHTML = '';
}

function equalClick(){

}

