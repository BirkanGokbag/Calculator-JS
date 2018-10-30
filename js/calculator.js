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
  this.songList =  ["pump_up.mp3","musical.mp3","SusumuHirasawa1.mp3","SusumuHirasawa2.mp3"];
}


Calculator.prototype = {
  updateDisplay:

  numberClick:

  keypress:

  operationClick:

  memoryClick:

  /*
    Author: Birkan Gokbag
    This method will clear the calculator completely.
  */
  clearCompeletely: function() {
      //Clear the display, and all the arguments.
      this.display.innerHTML = 0;
      this.hiddenArg = 0;
      this.memoryArg = 0;
      this.mainArg = 0;
      this.operator = undefined;
      this.clearScreen = false;
    }

  clearEntry:

  /*
    Author: Birkan Gokbag
    This method will define the functionality of log button.
  */
  logarithmic: function() {
      valueInDisplay = parseFloat(document.getElementById("display").innerHTML);
      //If the number is negative or 0, then cannot get the log of the value
      if (valueInDisplay <= 0){
        this.display.innerHTML = "Not A Number."
      }
      else{
        this.mainArg = Math.log(parseFloat(document.getElementById("display").innerHTML));
        this.updateDisplay;
      }
      //Log operation had happened, therefore set clearScreen to true
      this.clearScreen = true;
    }

    /*
      Author: Birkan Gokbag
      This method will define the functionality of factorial button.
    */
  factorial: function(){
      //Get the current value from the display
      displayValue = this.display.innerHTML;

      //If it is not a total value, then display Not a Number.
      if (displayValue % 1 == 0) {
        result = 1;
        //If the result is not 0, then proceed to calculate it.
        if (displayValue != 0) {
          tempVariable = displayValue;
          //If the number is negative, make it positive and make result negative.
          if (tempVariable < 0) {
            tempVariable = tempVariable * -1;
            result = -1;
          }
          //Get the result from here
          while (tempVariable != 0) {
            result = result * tempVariable;
            tempVariable--;
          }
        }
        // Add it to the main arg.
        this.mainArg = result;
        this.updateDisplay;
      } else {
          this.display.innerHTML = "Not A Number.";
      }
      //The next press will clear out the display if its a number
      this.clearScreen = true;
    }

    /*
      Author: Birkan Gokbag
      This method will have the song suffling functionality.
    */
  shuffleSong: function(){
    //Get the Id of the music player and its source.
    var musicPlayer = document.getElementById("musicPlayer");
    var musicSource = document.getElementById("musicSource");
    //Stop the music
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
    //Get a random song
    randomSong = Math.floor(Math.random() * this.songList.length);
    musicSource.src = "./assets/images_and_sounds/" + this.songList[randomSong];
    //Play the song
    musicPlayer.load();
    musicPlayer.play();
  }
}
