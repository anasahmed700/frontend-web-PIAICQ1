// Create an array & fill it with Numbers 
// Ask input from user 
// Find Element in Array that is provided by user 
var arr = [1,3,5,7,9,11,13,15];
var num = parseInt(prompt("enter a number to find it in array: "));
var found = false;

for (let index = 0; index < arr.length; index++) {
    if (arr[index] === num) {
        alert("found "+  num+ " at the index "+ index);
        found = true;
        break;
    } 
}
if (!found) { alert("Not found!"); }

// array splice
var food = ['pizza', 'burger', 'snacks', 'fries'];
console.log("food=", food);
// when pass only one number argument, it simply delete number count Elements  
var arr = food.splice(2);
console.log("spliced=", arr, "food=", food);

food = ['pizza', 'burger', 'snacks', 'fries'];
console.log("food=", food);
// splice take arguments as (start_index, delete_count, Elements_to_place)  
arr = food.splice(1, 2, 'roll paratha');
console.log('spliced=', arr, 'food=', food); 
// splicing an Array
var arr = [1, 2, 45, 654, 24334, 2];
console.log("initialize arr with:", arr);
arr = [1, 2, 45, 654, 24334, 2].splice(2);
console.log("2 initial values are deleted:", arr);
var a = [1, 2, 3, 4, 5, 6, 7];
console.log("initial value of a: " + a);
var b = a.splice(2, 3);
console.log("3 elements are deleted from index 2 from a: " + a);
console.log("and stored in b: " + b);
var c = a.splice(1, 2, "1", "23", "456");
console.log("a is spliced and 3 items are added between index 0 and 3: " + a);
console.log("spliced elements from a are stored in c: " + c);

// more Array functions 
// filter(), find(), indexOf(), lastIndexOf(), map(), reverse(), sort() etc 