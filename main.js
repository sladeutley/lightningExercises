//EXERCISE 1
// Loop through this array of objects and console.log “<name>’s job title is <title>”
// var array = [
//     {name: "Bob", 
//     department: "sales", 
//     title: "sales manager"},

//      {name: "Tina", department: "finance", title: "director of finance"},
//      {name: "Randy", department: "IT", title: "hardware guy"},
//      {name: "Glenda", department: "C-suite", title: "CEO"}
//  ];

//  for (var i=0; i < array.length; i++) {
//     console.log (`${array[i].name}'s job title is ${array[i].title}`);
//  };

//EXERCISE 2

// Lightning exercise for Tues, 12/5:
// Make an object with at least three properties. One property should be a method
// Create a new object that links to the first object.
// Give the new object two properties of its own
// In the console, call .hasOwnProperty() on the new object, passing in an inherited property as an argument. Does it return true or false?
// Do it again, but this time pass in one of the properties you added to the new object. True or false?

// let obj = {
//     name: "Slade",
//     favFood: "MacNChesses",
//     birthCity: "Los Angeles",
//     getFullName: function () {
//         return this.name + " Utley";
//     }
// };

// let fullName1 = obj.getFullName();
// console.log(obj.getFullName());

// let obj1 = Object.create(obj);
//     obj1.name = "Jeremy";
//     obj1.fullName = obj1.getFullName();
//     obj1.favFood = "pizza";
//     birthCity = "Jeremdom, Israel";

// console.log(obj1.hasOwnProperty('fullName1'));
// console.log(obj1.hasOwnProperty('favFood'));


// // console.log(obj1.name);
// console.log(obj1.fullName);
// // console.log(obj1.getFullName);

///////////////////////////////////////////
//EXERCISE 3 - DEC. 6

// Loop over every item in this array [45, “I”, true, null, “am”, 3.56, “a”, undefined, { catchphrase: “Oh hai, Mark”}, “JS”, “rockstar”]  and return a new array that contains only strings. and log out the result.

// let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"].filter((item) => {
//     return typeof(item) === "string";
// });
// console.log(array);

// let array1 = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

// let newArray = array1.filter(function(string) {
//         return typeof(string) === "string";
// });

// console.log(newArray);

// EXERCISE 4 - JAN. 2

// Loop-a-looza
// make a loop, .forEach and .filter on this array to get the same result
// Make an array called fave_demo that contains only ages from 18-49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let fave_demo = [];
for (let i=0; i < ages.length; i++) {
    if (ages[i] >17 && ages[i] < 50) fave_demo.push(ages[i])
};
console.log(fave_demo);

let fave_demo2 = [];
ages.forEach((age) => {
if (age > 17 && age < 50) fave_demo2.push(age);
});
console.log(fave_demo2);

let fave_demo3 = ages.filter((age) => (age > 17) && (age < 50));
console.log(fave_demo3);

// Exercise 5
//use dot notaion to access the value of the key "meaning_of_life" in this object

// hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//       copies_sold: 14000000,
//       formats: ["radio", "TV", "film", "graphic novel"],
//       ultimate_answer: {
//         meaning_of_life: 42
//       }
//     }
//   };

//   console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// //   if there's a variable that holds the value that's a reference to that string, use bracket notation
//   let meaning = "meaning_of_life"
//   console.log(hitchhikers_guide.random_facts.ultimate_answer[meaning]);

// EXERCISE 6

// let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

// // capitalize 'the', insert a coma after 'teacher' and output, "The greatest teacher, failure is"

// // .map allows us to take stuff from an array and mutate/change it before adding it to the new array
// console.log(
// yoda_quote.map((word) => {
//     if(word === "the")
//         word = word.slice(0,1).toUpperCase() + word.slice(1)
//     if(word === "teacher")
//         word = word + ","
//     return word
// }).join(" ")
// )





