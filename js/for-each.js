/**
 * Created by Matt on 10/12/16.
 */
var namesArray = ['john', 'paul', 'ringo', 'george', 'yoko'];

function capitalizeFirstLettersOfArray(testArray) {
    var newArray = [];

    testArray.forEach(function (element) {
        var firstLetter = element.charAt(0);
        var remainingLetters = element.substr(1, element.length);
        var newName = firstLetter.toUpperCase() + remainingLetters;
        newArray.push(newName);
        return newArray
    });
    return console.log(newArray);
}

capitalizeFirstLettersOfArray(namesArray);


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfNumbersInArray(numbersArray) {
    var sum = 0;

numbersArray.forEach(function (element) {
    sum += element;
    });
    console.log('This function is adding an array of numbers from 1-10 together.')
    console.log(sum);
}

sumOfNumbersInArray(numbers);


function putArrayInUnorderedList(toBePutInUnorderedList){

var startOfUl = "<ul>";
var endOfUl = "</ul>";

toBePutInUnorderedList.forEach(function (name) {

    startOfUl += "<li>" + name + "</li>";
});

startOfUl += endOfUl;
console.log(startOfUl);
}

putArrayInUnorderedList(namesArray);
