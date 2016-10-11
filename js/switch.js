/**
 * Created by Matt on 10/7/16.
 */
var luckyNumber = Math.floor(Math.random()*6);
var receipt = 60;

var amountWithDiscount;

switch (luckyNumber){

    case 0:
        amountWithDiscount = receipt;
        break;
    case 1:
        amountWithDiscount = receipt * .9;
        break;
    case 2:
        amountWithDiscount = receipt * .75;
        break;
    case 3:
        amountWithDiscount = receipt * .60;
        break;
    case 4:
        amountWithDiscount = receipt * .5;
        break;
    case 5:
        amountWithDiscount = 0;
        break;

}

console.log("You got number " + luckyNumber + ". You pay " + amountWithDiscount);

var monthNumber;
var monthName;


while(monthName !== "Dec"){

 var monthNumber = Math.floor(Math.random()* 12) + 1;

    console.log(monthName)
    switch (monthNumber){
        case 1:
            monthName = "Jan";
            break;
        case 2:
            monthName = "Feb";
            break;
        case 3:
            monthName = "Mar";
            break;
        case 4:
            monthName = "Apr";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "Jun";
            break;
        case 7:
            monthName = "Jul";
            break;
        case 8:
            monthName = "Aug";
            break;
        case 9:
            monthName = "Sep";
            break;
        case 10:
            monthName = "Oct";
            break;
        case 11:
            monthName = "Nov";
            break;
        case 12:
            monthName = "Dec";
            break;
    }
};




var inventory = Math.floor(Math.random()* 50) + 50;



do {
    var cones = Math.floor(Math.random()* 5) + 1;
    if(inventory < cones) {
        console.log("sorry i only have " + inventory + " left")
    } else {
        inventory -= cones;
        console.log("sold " + cones);
    }
} while(inventory > 0);
console.log("all cones sold!");
console.log(cones);






