/**
 * Created by Matt on 10/7/16.
 */

/*var wallVerse = "bottles of beer on the wall.";
var passItVerse = "bottles of beer. Take one down, pass it around.";

var bottlesOfBeer = 100;

do {
    bottlesOfBeer--;
if (bottlesOfBeer == 0){
    console.log("no more bottles of beer on the wall!")}
    else {
    console.log(bottlesOfBeer + " " + wallVerse);
    console.log(bottlesOfBeer + " " + passItVerse);

}
}
while (0 < bottlesOfBeer );
console.log("done");*/



for(var i = 0; i < 10; i++) {
    var c= i.toString();
    console.log(c.repeat(i));
    if(i==10){
        console.log("0".repeat(10))
    }
};

var randomNumber= Math.floor(Math.random() * 10) + 1;
var multiplyBy = 1;
for(multiplyBy; multiplyBy <= 10; ++multiplyBy){
    var answer = randomNumber * multiplyBy;
    console.log(randomNumber + "" + "*" + multiplyBy + "= " + answer)
}

for(var i = 0; i < 10; i++){
    var randoNum = Math.floor(Math.random() * 180) + 21;
    if (randoNum % 2 == 0){
    console.log(randoNum + " is even");
}   else {
   console.log(randoNum + " is odd");
}}



for (var i = 100; i >= 5; i -= 5){
    console.log(i)
}

for(var i = 0; i < 10; i++){
var randNum = Math.ceil(Math.random()*500) + 1;

if(randNum % 2 == 0) {
    console.log("Fuck");

}
else {
    console.log("shit");
}};






