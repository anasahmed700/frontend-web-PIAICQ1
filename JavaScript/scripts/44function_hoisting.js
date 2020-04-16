// 3: Hoisting (All variables and functions declare on the top of their respective scopes)
// initialization
hello();
// declaration
function hello(){
    console.log("Hello world!");
}

// in hoisting all variable and function only declared at the top not initialized 
// like var a;
console.log("a before initialized=", a);
var a = 5;
console.log("a after initialized=", a);


// difference betweem variable & function hoisting
var mul = prod(3, 2);
console.log(mul);
// var add = sum(2, 3); // error: sum is not a fuction
console.log(sum);

var sum = function(a, b){
    return a + b;
};

function prod(num1, num2){
    return num1 * num2;
}