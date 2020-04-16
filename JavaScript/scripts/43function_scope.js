// 4: local & global scope in functions 
var a = 7; // global
function func(){
    var b = 6; // local
    // a = b + 5; // updating global variable a
    var a = b + 5; // a declared as local variable
}

func();
// console.log("a =", a); // a = 13
// console.log('b =', b); // error b is not defined 
console.log("a =", a); // a = 7 as global not 11 as local


// 5: global variable without var keyword
a = 7; // any variable which declared without var keyword is global
function newFunc(){
    b = 8; // b is also consider as global after function call
    a = b + 1;
}
console.log("a before function call =", a);
// console.log("b before function call =", b); // through error 'b' not defined
newFunc();
console.log("a after function call =", a);
console.log("b after function call =", b); // can be operate as a global


// 6: args passed by values (all primitive data types {string, number, boolean})
console.log("Passed by value example..............")
var a = 54;
function value(val){
    val = 4;
    console.log('A inside the function:', val);
}
value(a);
// as an argument, primitive/value datatypes will not change its original values  
console.log('A outside the function:', a); // 54

// args passed by reference (all non-primitive data types {objects, arrays})
console.log("Passed by reference example..............")
var b = [34,76,87,45];
function reference(ref){
    console.log('B inside function before update', ref);
    b[0] = 1;
    console.log('B inside function after update', ref);
}
console.log('B before function call:', b);
reference(b);
// as an argument, reference/non-primitive datatypes will change its original values after function call
console.log('B after function call:', b);

// args passed by reference (reference breaking) 
function brkref(ref) {
    console.log('ref before update in function:', ref);
    console.log('breaking reference by assigning new array object as ref....');
    ref = [1,2,3,4];
    ref[1] = 45;
    console.log('ref after assigning array values in function:', ref);
}
brkref(b);
console.log('B will remain unchanged due to reference break:', b);
