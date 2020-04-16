// right triangle 
console.log("right angle triangle");
for(i = 0; i < 7; i++){
    console.log("*".repeat(i));

}
console.log("\nTriangle shape 2");
// triangle 2
function printTri(n){
    function printStar(n){
        console.log("*".repeat(n));
    }
    for (let i = 1; i <= n; i++) {
        printStar(i);
    }
    for(let i = n - 1; i > 0; i--){
        printStar(i);
    }
}
printTri(6);

// Pyramid with alternate spaces
console.log("\nPyramid");
function genPyramid(rows){
    for (let i = 0; i < rows; i++) {
        output = '';
        for (let j = 0; j < rows - i; j++) {
            output += " ";
        }
        for (let k = 0; k <= i; k++) {
            output += "* ";
        }
        console.log(output);
    }
}
genPyramid(4);

// Pyramid with continuos pattern 
console.log("\nPyramid 2");
function getPyramid(rows) {
    for(let i = 1; i <= rows; i++){
        let str = " ".repeat(rows - i);
        let str2 = '*'.repeat((i * 2) - 1);
        console.log(str + str2 + str);
    }
}
getPyramid(4);