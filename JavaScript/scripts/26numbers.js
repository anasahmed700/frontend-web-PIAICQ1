var num = 5;
var add = num + 2;
var sub = num - 3;
var mul = num * 2;
var div = num / 2;
var mod = num % 2;

console.log("unfamiliar expressions:");
// post & pre increment & decrement
num++; num--; ++num; --num;
// 26: Rounding Numbers
console.log("Rounding Numbers");
var positive_decimal = 1.5; var negative_decimal = -1.5;
var positive_rounded = Math.round(positive_decimal);
var negative_rounded = Math.round(negative_decimal);
console.log(`${positive_decimal} rounds off to ${positive_rounded}`);
console.log(`${negative_decimal} rounds off to ${negative_rounded}`);
var decimal_num = prompt("Enter decimal number to find ceil & floor: ");
var ceiling_num = Math.ceil(decimal_num);
var floor_num = Math.floor(decimal_num);
console.log(`${decimal_num} to the ceiling is ${Math.ceil(decimal_num)}`);
console.log(`${decimal_num} to the floor is ${Math.floor(decimal_num)}`);

// 27: Generating random Number
alert("Generating a random number!");
var bigDecimal = Math.random();
console.log("Random number from 0 to 1;", bigDecimal);
alert("Multiplying by 6 & adding 1 to generate random number between range of 1 to 6:");
var rangedNum = (bigDecimal*6) + 1;
console.log("Ranged number is", rangedNum);

alert("rounding off the Ranged number to get dice!");
var dice = Math.floor(rangedNum);
console.log(`Whole number of ${rangedNum} is ${dice}`);

// 28: converting String to integer & float 
var currentAge = prompt("Enter your age: ");
var ageInteger = Number(currentAge) + 1;
console.log("qualifying age is", ageInteger);
alert(`Now converting ${ageInteger} to string`);
var numAsStr = ageInteger.toString();
console.log("This is string - >",numAsStr);

// 30: Controlling the length of decimals
var price = 9.95;
var taxRate = 6.5;
var total = (price / taxRate) + price;
console.log("Total price is",total);
fixedTotal = total.toFixed(2);
console.log("Price fixed to two decimal places:", fixedTotal);

// here toFixed() method rounds off 5 to floor not to ceil
var num = 1.555;
console.log(num.toFixed(2));
var str = num.toString();
if(str.charAt(str.length - 1) === '5'){
    str = str.slice(0, str.length - 1) + '6';
}
num = Number(str);
var prettyNum = num.toFixed(2);
console.log(prettyNum);
