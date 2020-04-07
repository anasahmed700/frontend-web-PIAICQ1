var firstname = "Anas Ahmed";
var firstChar = firstname.slice(0, 1);
console.log("First character is "+firstChar);
// alternate 
firstChar = firstname.charAt(0);
console.log("First character is " + firstChar);
var lastChar = firstname.charAt(firstname.length - 1);
console.log("last character is " + lastChar);

var text = "Hello World!";
for(var i = 0; i < text.length; i++){
    if(text.charAt(i) === "!"){
        console.log("Exclamation point found!");
        break;
    }
}