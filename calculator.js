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
