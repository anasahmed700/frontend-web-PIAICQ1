// Arrays are mutable abjects which have composite/reference datatype 

var cities = ["Karachi", "Islamabad", "Lahore", "Rawalpindi", "Faisalabad",
    "Multan", "Haiderabad"];
console.log("Welcome to " + cities[0]);

var pets = [];
pets[0] = "cat"; pets[1] = "dog"; pets[2] = "bird"; pets[3] = "lizard";
pets[4] = "fish"; pets[5] = "gerbil";pets[6] = "snake";
console.log(pets);
// Arrays: Adding and removing elements
// remove last Element from array which is "snake" (stack or LIFO approach)
var removed_by_pop = pets.pop(); 
console.log("pets array after using pets.pop() - > " + pets);
console.log( removed_by_pop + " is removed from array");
// add Elements to the end of the array 
var added_by_push = pets.push("pigeon", "ferret"); 
console.log("pets array after using pets.push('pigeon', 'ferret') - > " + pets);
console.log("push() returns length of array which is " + added_by_push + "elements");

// Arrays: Removing, inserting, and extracting elements
// remove an element from the beginning of an array. (Queue or FIFO approach) 
var removed_by_shift = pets.shift(); 
console.log("pets array after using pets.shift() - > " + pets);
console.log(removed_by_shift + " is removed from array");
// To add one or more elements to the beginning of an array
var added_by_unshift = pets.unshift('rabbit'); 
console.log("pets array after using pets.unshift('rabbit') - > " + pets);
console.log("unshift() returns length of array which is " + added_by_unshift + "elements\n");


// Array slicing (extract specific part of an array)
var foods = ['pizza', 'burger', 'snacks', 'sandwich', 'fries'];
// slice takes (start_index, end_index(exculsive)) 
var arr = foods.slice(1, 3);
// if you pass only starting index, it will slice array from start_index to last element of array  
var arr2 = foods.slice(2);
console.log('foods=', foods, 'sliced=', arr, 'toTheEnd=', arr2);


// forEach in array 
console.log('\n');
var hobbies = ['Praying', 'Programming', 'Gaming', 'traveling', 'learning', 'shooting'];
hobbies.forEach(function(item, index){
    console.log("i like", item, index);
});