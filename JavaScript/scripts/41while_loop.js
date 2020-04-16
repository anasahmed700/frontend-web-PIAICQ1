var i = 0;
while (i <= 3) {
    console.log(i);
    i++;
}

// 42: do...while loops
var j = 0;
do {
    console.log(j);
    j++;
} while (j <= 3);

// difference
while (false) {
    console.log("first iteration of while");
}

do {
    console.log("first iteration of do while");
} while (false);