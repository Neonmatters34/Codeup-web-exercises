/**
 * Created by Matt on 10/13/16.
 */
'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
 var books = [


     {
         "title": "How to be a Dog",
         "author": {
             "firstName": "Duck",
             "lastName": "McGuck"
         }
     },


     {
         "title": "How to Perform Hari Kari",
         "author": {
             "firstName": "Scrooge",
             "lastName": "McDude"
         }
     },


     {
         "title": "How to Breath",
         "author": {
             "firstName": "Lisa",
             "lastName": "Lazzzer"
         }
     },


     {
         "title": "How to be a Rock",
         "author": {
             "firstName": "Rocky",
             "lastName": "Boulderboa"
         }
     },

     {
         "title": "How to Read How-to's",
         "author": {
             "firstName": "Learn",
             "lastName": "Thug"
         }

     }

];

// log out the books array
books.forEach(function (element,i) {
    console.log("Book#" + (i + 1));
    console.log("Title: " + books[i].title);
    console.log("By: " + books[i].author.firstName + " " + books[i].author.lastName);
    console.log("------------------");
});

/*
for(var i = 0; i < books.length; i++) {

    console.log("Title: " + books[i].title);
    console.log("By: " + books[i].author.firstName + " " + books[i].author.lastName)
    console.log("------------------")
};*/


// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here



// end loop here