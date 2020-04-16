// This function only works on a non-white space strings 
function toTitleCaseWord(str){
    var firstChar = str.slice(0, 1);
    var otherChar = str.slice(1);
    firstChar = firstChar.toUpperCase();
    otherChar = otherChar.toLowerCase();
    var titleCase = firstChar + otherChar;
    return titleCase;
}
// to change any string to title case 
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

var month = prompt("Enter a month");
if(month.length > 3){
    alert("You have selected " + toTitleCase(month));
} else{
    var abbrMonth = month.slice(0, 3);
    alert("You have selected " + abbrMonth.toUpperCase());
}

// split the string 
var text = "To be or not to be.";
var splited = text.split(' '); // split('spliter-character')
console.log("string=", text);
console.log("splited-string=", splited);
