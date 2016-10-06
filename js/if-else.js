/**
 * Created by Matt on 10/6/16.
 */
"use strict";

/*--Knowing that a student's grades are 70, 80, 95. Write a JS program,
using conditionals that logs to the console "You're awesome" if the average of her grades is greater than 80,
    otherwise the message should be "You need to practice more".*/

var studentsGrades = (80+79+90)/3;

if(studentsGrades>=80){
    console.log("You are awesome")
}
else{console.log("you suck")}

var cameronTotal = 180;
var customerOne = "cameron";
var afterDiscount = .8;

var ryanTotal = 250;
var customerTwo = "Ryan";

var georgeTotal = 320;
var customerThree = "George";

if(cameronTotal>200){
    console.log(customerOne+" total before discount: $" + cameronTotal + ". Total after discount: $" + (cameronTotal*afterDiscount))
}
else{
    console.log(customerOne+" total: $" + cameronTotal + ". No discount")}

if(ryanTotal>200){
    console.log(customerTwo+" total before discount: $" + ryanTotal + ". Total after discount: $" + (ryanTotal*afterDiscount))
}
else{
    console.log(customerTwo+" total: $" + ryanTotal) + ". No discount"}

if(georgeTotal>200){
    console.log(customerThree+" total before discount: $" + georgeTotal + ". Total after discount: $" + (georgeTotal*afterDiscount))
}
else{
    console.log(customerThree+" total: $" + georgeTotal) + ". No discount"}

