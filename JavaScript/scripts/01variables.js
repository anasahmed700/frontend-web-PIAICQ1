
var fname = "Anas";
var lname = "Ahmed";
var nationality = "Pakistani";
var weight = 70;
var graduate = false;
var status;
var certification = null;

console.log(fname+ " "+ lname + " is " + nationality);
console.log("weight is " + weight);
console.log("status is " + status);
console.log("certifications are " + certification);

// data types 
console.log("Type of nationality is " + typeof nationality);
console.log("Type of weight is " + typeof weight);
console.log("Type of graduate is " + typeof graduate);
console.log("Type of status is " + typeof status);
console.log("Type of certification is " + certification);

// variable type casting 
var age = "25";
var height = "5.7";
var num = 4;
var sum = parseInt(age) + num;
console.log(sum);
sum += parseFloat(height);
console.log(sum);
sum = String(sum);
console.log(sum + 100);
sum = Number(sum);
console.log(sum - 30);

// concatenation
var msg = "Hello";
var a = 3; var b = 5;
console.log(msg + a + b);
console.log(a + msg + b);
console.log(a + b + msg);
console.log(msg + (a + b));
