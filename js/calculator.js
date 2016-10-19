/**
 * Created by Matt on 10/17/16.
 */
var buttons = document.getElementsByClassName('numericInput');//returns array of number buttons only
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var operators = [add, subtract, multiply, divide];
var displayedNumbers;
var displayField = document.getElementById('displayField');
var empty = "";

//checking for which button is clicked
for (var i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener('click', addCharactersToDisplay)
}
for (var j = 0; j < operators.length; j++) {
    operators[j].addEventListener('click', addCharactersToDisplay)
}

console.log(operators);



//changes display based on innerhtml of buttons
function addCharactersToDisplay() {

    displayedNumbers = displayField.innerHTML += this.innerHTML;

}

//clears display for final Result
function clearDisplayForResult(input){

    displayField.innerHTML = input
}

//makes clear button clear display
clear.addEventListener('click', clearDisplayForOutput);
function clearDisplayForOutput(){

    displayField.innerHTML = ""
}

//does math for and displays output
function finalOutput() {
    var numbers;
    var mathResult;
    function splitDisplayString(operator) {
        return displayedNumbers.split(operator);
    }

    result.addEventListener('click', function toBeOutput() {
        if(displayedNumbers.indexOf("+") > 0){
          numbers = splitDisplayString("+");
            displayedNumbers = "";
            mathResult = parseInt(numbers[0]) + parseInt(numbers[1]);
        }
        else if(displayedNumbers.indexOf("-") > 0){
           numbers = splitDisplayString("-");
            displayedNumbers = "";
            mathResult = numbers[0] - numbers[1];
        }
        else if(displayedNumbers.indexOf("*") > 0){
           numbers = splitDisplayString("*");
            displayedNumbers = "";
            mathResult = numbers[0] * numbers[1];
        }
        else if(displayedNumbers.indexOf("/") > 0){
           numbers = splitDisplayString("/");
            displayedNumbers = "";
            mathResult = numbers[0] / numbers[1];
        }
        clearDisplayForResult(mathResult);
    })
}
finalOutput();