var firstname = "Anas Ahmed";
var firstChar = firstname.slice(0, 1);
console.log("First character is "+firstChar);
// alternate 
firstChar = firstname.charAt(0);
console.log("First character is " + firstChar);
var lastChar = firstname.charAt(firstname.length - 1);
var lastChar = firstname.charAt(firstname.length - 1);
console.log("last character is " + lastChar);

var text = "Hello World!";
for(var i = 0; i < text.length; i++){
    if(text.charAt(i) === "!"){
        console.log("Exclamation mark found!");
        break;
    }
}

// replace the string (note: strings are immutable, so replace don't change the original string
//  but in returns another string to store)
var name = "Anas Ahmed";
var changed = name.replace('Ahmed', 'Ansari');
console.log(changed);
var text = "To be or not to be.";
var changedLocal = text.replace('be', 'will');
console.log("Locally changed string:", changedLocal);
// to replace string globally we have to use regular expression
var changeGlobal = text.replace(/to/gi, 'will'); // /g flag for global &  /i for case insensitive
console.log("Globally & case insensitive changed string:", changeGlobal);

/* other String functions: charCodeAt(), concat(), endsWith(), includes(), match(), repeat(), replace(),
 search(), startsWith(), substr(), substring(), trim() etc */  