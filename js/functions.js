"use strict";
(function () {


    var myNameIs = 'Matt';

    function sayHello(name) {
        console.log(" Hello my name is " + name);
        return name;
    }

    sayHello(myNameIs);
    var random = Math.floor((Math.random() * 100) + 1);
    // TODO: Fill in your name here.


    function isOdd(number) {
        return (number)
    }
})();

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
