var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
var cityToCheck = prompt("Enter a city name: ");
cityToCheck = toTitleCase(cityToCheck);
// flag variable
var matchFound = false;
for(var i = 0; i < cleanestCities.length; i++){
    if(cityToCheck === cleanestCities[i]){
        matchFound = true;
        alert(cleanestCities[i] + " is one of the cleanest cities");
        break;
    }
}
if(matchFound === false){
    alert("This city is not listed in cleanest one!");
}

// Nested for loop example
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
// To handle 2 uneven array length
if (firstNames.length !== lastNames.length){
    var x = firstNames.length - lastNames.length;
    for(var i = 0; i < x; i++){
        lastNames.push("");
    }
}
// Concatenate 2 array index strings in a single array 
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        if(i === j){
            fullNames.push(firstNames[i] + lastNames[j]);
        }
    }
}
alert("Full Names: "+fullNames);