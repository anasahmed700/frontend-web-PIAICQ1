function tellTime() {
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    // alert("time: ", hr, ":", min);
    console.log("time: ", hr, ":", min);
}
tellTime();

// 36: Passing them data
function showMessage(month, str, num){
    console.log(month, str, num);
}
var m = "August"; s = "'s winner number is"; n = 03;
showMessage(m + s, n);

// 37: Passing data back from them
function calcTot(merchTot){
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    } else if(merchTot < 50.01){
        orderTot = merchTot + 5;
    } else{
        orderTot = merchTot + 5 + (0.03 * (merchTot - 50));
    }
    return orderTot;
}
var merchandise = 79.9;
var totalToCharge = calcTot(merchandise);
console.log("total charges:", totalToCharge.toFixed(2));

// 38: Local vs. global variables
var theSum = 7; // this is global
function addNumbers(){
    var theSum = 2 + 2; // this is local
    return theSum;
}
console.log(theSum);
console.log(addNumbers());