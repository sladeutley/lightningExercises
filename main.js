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

let obj = {
    name: "Slade",
    favFood: "MacNChesses",
    birthCity: "Los Angeles",
    getFullName: function () {
        return this.name + " Utley";
    }
};

let fullName1 = obj.getFullName();
console.log(obj.getFullName());

let obj1 = Object.create(obj);
    obj1.name = "Jeremy";
    obj1.fullName = obj1.getFullName();
    obj1.favFood = "pizza";
    birthCity = "Jeremdom, Israel";

console.log(obj1.hasOwnProperty('fullName1'));
console.log(obj1.hasOwnProperty('favFood'));


// console.log(obj1.name);
// console.log(obj1.fullName);
// console.log(obj1.getFullName);





