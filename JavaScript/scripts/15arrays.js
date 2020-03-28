
var cities = ["Karachi", "Islamabad", "Lahore", "Rawalpindi", "Faisalabad",
    "Multan", "Haiderabad"];
console.log("Welcome to " + cities[0]);

var pets = [];
pets[0] = "cat"; pets[1] = "dog"; pets[2] = "bird"; pets[3] = "lizard";
pets[4] = "fish"; pets[5] = "gerbil";pets[6] = "snake";
console.log(pets);
// Arrays: Adding and removing elements
// remove last Element from array which is "snake"
var removed_by_pop = pets.pop(); 
console.log("pets array after using pets.pop() - > " + pets);
console.log( removed_by_pop + " is removed from array");
// add Elements to the end of the array 
var added_by_push = pets.push("pigeon", "ferret"); 
console.log("pets array after using pets.push('pigeon', 'ferret') - > " + pets);
console.log("push() returns length of array which is " + added_by_push + "elements");

// Arrays: Removing, inserting, and extracting elements
// remove an element from the beginning of an array. 
var removed_by_shift = pets.shift(); 
console.log("pets array after using pets.shift() - > " + pets);
console.log(removed_by_shift + " is removed from array");
// To add one or more elements to the beginning of an array
var added_by_unshift = pets.unshift('rabbit'); 
console.log("pets array after using pets.unshift('rabbit') - > " + pets);
console.log("unshift() returns length of array which is " + added_by_unshift + "elements");

