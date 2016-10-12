(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.

    var names = ["Blazer", "Laser", "Olga", "Rex"];
    console.log("There are " + names.length + " names in the array.");

    for(var i = 0; i < names.length; i++){
        console.log(names[i])
    }
    names.forEach(function (names) {
        console.log("Say hello to " + names);
    });
    var grades = [100, 80, 90, 80, 70];
    function average() {
        var sum=0;
        for(var i = 0; i < grades.length; i++){
            sum += grades[i];

        }
        return  console.log(sum / grades.length);
    }
    average();
})();

var shapes = ['square', 'circle', 'triangle', 'rectangle'];
shapes.forEach(function (shit, lol,f) {
    console.log( 'shape at' + lol + ' is ' + shit);
});


