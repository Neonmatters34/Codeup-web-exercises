/**
 * Created by Matt on 10/14/16.
 */
'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var luckyNumbersArray = [0,1,2,3,4,5];
while (i <= 100){
    i++;
    luckyNumber = Math.floor(Math.random()* 6);
    luckyNumbersArray[luckyNumber]++;
    }
        luckyNumbersArray.forEach(function (counter, i) {
            console.log(i + " appeared" + counter + "times")
        });

    /*else if (luckyNumber = 0 && luckyNumber == luckyNumbersArray.indexOf(luckyNumber)){
        var zeroCounter = 0;
        zeroCounter++;
        luckyNumbersArray.splice(luckyNumbersArray.indexOf(luckyNumber), 1, zeroCounter);
    }*/



/*
var zeroCounter = 0;
var oneCounter = 0;
var twoCounter = 0;
var threeCounter = 0;
var fourCounter = 0;
var fiveCounter = 0;
*/
// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100