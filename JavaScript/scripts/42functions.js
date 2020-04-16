function findGrade(score){
    if (typeof(score) == 'number') {
        if (score > 100) {
            console.log("Marks can't be acceed more than 100!"  )
        } else if (score > 80 && score <= 100) {
            console.log("Grade: A");
        } else if(score > 70 && score <= 80){
            console.log("Grade: B");
        } else if (score > 60 && score <= 70) {
            console.log("Grade: C");
        } else{
            console.log("Grade: F");
        }
    } else {
        console.log('This is not valid input, please enter a number to find grades');
    }
}
findGrade(50);

// 2: function return
function calculateScore(sub1, sub2, sub3){
    return (sub1 + sub2 + sub3) / 3;
}
var score1 = calculateScore(65, 87, 56);
var score2 = calculateScore(54, 86, 76);
console.log(score1);
console.log(score2);
findGrade(score1);
findGrade(score2);


// 3: function in expressions 
function mul(num1, num2){
    return num1 * num2;
}
function sum(a, b){
    return mul(a, b) + b;
}

var add = sum(5, 9);
console.log("Addition: ", add);


// 4: function expression
var square = function (num) { return num * num; }
var c = square(3);
console.log(c);

// 5: recursive function
console.log('finding factorial using recursive function...')
function factorial(n){
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));
console.log(factorial(4));