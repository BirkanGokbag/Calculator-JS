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
  if(display.length < 19){
    if(display == 0){
      document.getElementById("display").innerHTML = number;   
    }else{
      display = display + number;
      display = parseFloat(display.split(',').join('')).toLocaleString();
      document.getElementById("display").innerHTML = display;
    }
  }
}
