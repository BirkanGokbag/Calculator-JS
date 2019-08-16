# Project 5
### JavaScript Calculator

## Overview
This project is a calculator that was created using javascript, html, and css.

# Main Functionality
-Input numbers!
-Perform basic operations!
-Use memory features!
-Clear the display!!!!!! (In two different ways ;))
# Extra Functionality
-Use the buttons on the keyboard for quicker calculations!
-Enjoy "calming" music as you attempt to finish your frustrating math homework!
-Use a bevy of mathematical operations (sin, cos, pi, ln).
## Required Software
npm --- `sudo apt install mocha`

mocha --- `sudo npm install mocha`

node --- `sudo apt install nodejs-legacy`


## How To Run
Navigate into the project folder, and open calculator.html in your browser of choice.



## Work Distribution
### Roles
* Overall Project Manager: Rajeev Ravi
* Coding Manager: Alyssa Langhals
* Testing Manager: Berkay Kaplan  
* Documentation: Michael Radey

### Contributions
Please list who did what for each part of the project.
Also list if people worked together (pair programmed) on a particular section.

Berkay Kaplan: Did the operationclick that manipulates minor operations such as +, -, *, /, ^, and =. Also, create squareroot that take the squareroot of a number, percent that takes the percent, and clear that clears the displayed number.  

Alyssa Langhals: Created the numberClick, updateDisplay, and trigClick buttons. Contributed to the redesign of the object prototype and figured out object binding for the event listeners. Set up test outline and wrote tests for previously listed methods

Birkan Gokbag: Created the javascript code for "n!","c","log" within the calculator. Added the background picture and the audio that is within the calculator, along with the shuffle button for all the music. Created the history bar below the calculator along with its functionality. Did system and unit testing, edited the css of the calculator.

Rajeev Ravi: Created memory functions. SetOperator function. Redesign of calculator object (twice). Design of calculator prototype. System testing, unit tests for memory functions.

Michael Radey: Created the keypress function and the calculator.html file.  Also edited the extra buttons consisting of logarithmetic, factorial, and x^y to work with the redesign using prototypes.  Also did system and unit testing.  


## Testing
### How to Run
Enter the /test directory in the project folder, then execute:

`npm test`
### Plan
We created unit tests using mocha for most of the main functions included in the calculator object. These tests were run using the command described above.

We tested the System by generating the UI and entering combinations of buttons, starting at the most simple (like clicking on the numbers) and completing simple calculations, and then moving to more complex conditions.
