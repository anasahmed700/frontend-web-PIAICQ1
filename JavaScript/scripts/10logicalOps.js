console.log("AND operator:");
var a = 60;
var b = a > 50 && a < 70;
console.log(b);
var c = 80;
var d = c > 50 && c < 70;
console.log(d);

console.log("OR operator:");
a = 60;
b = a < 50 || a > 70;
console.log(b);
c = 80;
d = c < 50 || c > 70;
console.log(d);

console.log("NOT operator:");
a = 60;
b = !(a < 50);
console.log(b);

console.log("DOUBLE NOT operator:");
c = !1; d = !!1;
e = !0; f = !!0;
console.log(c); console.log(d);
console.log(e); console.log(f);

console.log("Value conversion to Boolean with && operator:");
var and1 = 'cat' && 'dog'; // t && t returns 'dog' (last true)
var and2 = false && 'cat'; // f && t returns false
var and3 = 'cat' && false; // t && f returns false
var and4 = "" && false; // f && f returns "" (first false)
var and5 = false && ""; //  f && f returns false
var and6 = 0 && 1; // f && t returns 0 (first false)
var and7 = 1 && false; // t && f returns false
var and8 = true && {}; // t && t returns {} (last true)
var and9 = false && {}; // f && t returns false
var and10 = 'cat' && (3 == 4); // t && f returns false
var and11 = 'cat' && 0; // t && f returns 0
var and12 = undefined && 'cat'; // f && t returns undefined

console.log("Value conversion to Boolean with || operator:");
var or1 = 'cat' || 'dog'; // t || t returns 'cat' (first true)
var or2 = false || 'cat'; // f || t returns 'cat'
var or3 = 'cat' || false; // t || f returns 'cat'
var or4 = "" || false; // f || f returns false (last false)
var or5 = false || ""; //  f || f returns "" (last false)
var or6 = 0 || 1; // f || t returns 1 
var or7 = 1 || false; // t || f returns 1
var or8 = true || {}; // t || t returns true (first true)
var or9 = false || {}; // f || t returns {}
var or10 = 'cat' || (3 == 4); // t || f returns 'cat'
var or11 = 'cat' || 0; // t || f returns 'cat'
var or12 = undefined || 'cat'; // f || t returns 'cat'