    
beforeEach(function(){

calculatorBase = {
  mainArg: 0, //The main argument usually on the calculator's display.
  hiddenArg:0, //The argument that is hidden and used for the various operations.
  memoryArg:0, //The memory variable
  empty_out:0, //Where some functions that reset the display are stored
  display: document.getElementById("display"), //A direct link to the display's html.
  clearScreen:false
  }
  NumberButton.prototype = calculatorBase;

  OperationButton.prototype = calculatorBase;

  //create the number buttons
  document.body.appendChild('<button class=\'number\'>1</button>');
  numberButtons = document.getElementsByClassName('number');
  for(i = 0; i < numberButtons.length; i++){
    numberbutton = NumberButton(numberButtons[i]);
  }
  console.log(numberButtons);
 
});

describe("Hello World", function(){ 
  //sdocument.getElementsByClass('number');
   it("should Return Hello world",function(){ 
      expect(calculatorBase.mainArg).toEqual(0); 
   }); 

});
