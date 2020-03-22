// 1: Backtic
var name = "Anas Ahmed";
var father = "Shoaib Ahmed"

var msg = `My name is ${name}
My father name is ${father}`;

console.log(msg)

// 2: scope
// function scope (var) can accessable outside the function
if(true){
    var company = "Panacloud";
    let company2 = "Panacloud";
}
console.log(company);

// block scope (let) can't accessable outside the function
// console.log(company2);

var myname = "Anas";
function add(){
    if(myname === "Anas"){
        var age = 27;
        let weight = 60;
        const MYFATHER = "Shoaib Ahmed";

        console.log(age, weight, MYFATHER);
    }
    console.log(age);
    // console.log(weight);
    // console.log(MYFATHER);
}
add(); 


// 3: Hoisting (All variables and functions declare on the top of their respective scopes)
console.log(x);
var x = 12;