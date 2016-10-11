/**
 * Created by Matt on 10/10/16.
 */
'use strict'

/*Use Math.floor((Math.random()*50)+1) to generate a random number between 1 and 50.
If the number is not odd, keep getting a new random number till it is odd.
 */

/*Use console.log to log all the odd numbers from 1 to 50, except the random odd number you generated,
by using break and continue.
 Try to match the output shown below (your random number will be different).
  */

var randomNumber = Math.floor((Math.random()*50) + 1);


while (randomNumber % 2 == 0){
    var randomNumber = Math.floor((Math.random()*50) + 1);

}
    console.log(randomNumber + " is the number to skip.");

for (var i=0; i<50; i++){
    if (i == randomNumber){
        console.log ("this number sucks")
        continue;
    }
     if (i % 2 !== 0){
        console.log(i)
    }
};
/*do{
    var randomNumber = Math.floor((Math.random()*50) + 1);
}
while (randomNumber % 2 == 0 ) {
    var randomNumber = Math.floor((Math.random()*50) + 1);
    if (randomNumber % 2 !== 0){
        log
    }
}

for (var j = Math.floor((Math.random()*50) + 1; ; ) {
    if (randomNumber % 2 == 1) {
        break;l
    }
}*/
var myNameIs=("Matt");

function sayHello(name){
    console.log("Hello my name is ");
    return name;
}

console.log(sayHello(myNameIs));


for (i = 0; i<2; ++i){

}

function drawCard(){
    var card = Math.floor((Math.random() * 14) + 1);
    switch (card){
        case 11:
            card = "J";
            break;
        case 12:
            card = "Q";
            break;
        case 13:
            card = "K";
            break;
        case 14:
            card = "A";
            break;
    }
    return card;
}

var cardUno = drawCard();
var cardDos = drawCard();
if (cardUno, cardDos == "A"){
    cardUno, cardDos = 11;}

if(cardUno, cardDos == "K" || "Q" || "J"){
    cardUno, cardDos = 10;
}
var total = cardDos + cardUno;
while(total <21){
    drawCard() + total;
    if(total > 21 && cardUno=="A"){
        cardUno = 1}
    else if(total > 21 && cardDos==11){
            cardDos = 1}
    else if (total == 21){
        console.log("winner")
        break;
    }
}






console.log("your cards " +cardUno, cardDos());


