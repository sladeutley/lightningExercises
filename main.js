// Loop through this array of objects and console.log “<name>’s job title is <title>”
var array = [
    {name: "Bob", 
    department: "sales", 
    title: "sales manager"},

     {name: "Tina", department: "finance", title: "director of finance"},
     {name: "Randy", department: "IT", title: "hardware guy"},
     {name: "Glenda", department: "C-suite", title: "CEO"}
 ];

 for (var i=0; i < array.length; i++) {
    console.log (`${array[i].name}'s job title is ${array[i].title}`);
 };

 document.getElementById("btn").addEventListener("click", e => {
    console.log("You clicked. Good for you", e.target);
 });

 //could be
 document.getElementById("btn").addEventListener("click", e=> "Hello");