/**
 * Created by Matt on 10/11/16.
 */

function average3grades(){
    var sum = 0;
    for(var i = 0;i<3; ++i) {
        var getGrade;
        getGrade = Number(prompt("Enter grade"));
        console.log(getGrade)
        while (isNaN(getGrade)  ){
            getGrade = Number(prompt("Please input a numeric grade."))
        }
        sum = sum + getGrade
    }

    var average = Math.floor( sum / 3);
    if (average >= 80){
        alert("Righteous dude! Killer gradez!")
    }
    else if (average < 75){
        alert("You need to study more ya doofus.")
    }
    return average;

}

function genericGradesAverage(){
    var sum = 0;
    var gradeCounter = 0;
    var addAnother;
    do {
        var getGrade;
        getGrade = Number(prompt("Enter grade"));
        while (isNaN(getGrade)  ){
            getGrade = Number(prompt("Please input a numeric grade."))
        }
        sum = sum + getGrade;
        addAnother = confirm("add another grade")
        ++gradeCounter;


    }while (addAnother == true);

    var average = sum / gradeCounter;
    if (average >= 80){
        alert("Righteous dude! Killer gradez!")
    }
    else if (average < 75){
        alert("You need to study more ya doofus.")
    }
    return average;

}


alert("your average is " + genericGradesAverage());