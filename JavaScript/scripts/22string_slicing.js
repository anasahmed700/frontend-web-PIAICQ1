// This function only works on a non-white space strings 
function toTitleCase(str){
    var firstChar = str.slice(0, 1);
    var otherChar = str.slice(1);
    firstChar = firstChar.toUpperCase();
    otherChar = otherChar.toLowerCase();
    var titleCase = firstChar + otherChar;
    return titleCase;
}

var month = prompt("Enter a month");
if(month.length > 3){
    var abbrMonth = month.slice(0, 3);
    alert("You have selected " + abbrMonth.toUpperCase());
} else{
    alert("You have selected " + toTitleCase(month));
}

// var str = prompt("Enter some text");
// var numChars = str.length;
// for(var i = 0; i < numChars; i++){
//     if (str.slice(i, i+2) === " "){
//         alert("No double spaces!");
//         break;
//     }
// }

