var text = "in World War II germany lost badly!";
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
        console.log(text);
    }
}

// another easy way to find index 

var mytext = "in World War II 75 million people were died :(";
var banned_word = "World War II";
var alternet_word = "the second world war";
var firstChar = mytext.indexOf(banned_word);
// if indexOf could not found, it returns -1
if (firstChar !== -1) {
    mytext = mytext.slice(0, firstChar) + alternet_word + mytext.slice(firstChar + banned_word.length);
}
console.log(mytext);

// get different index of same string 
var text = "To be or not to be.";
// indexOf('string', position_index)
var startIndex = text.indexOf('be');
var fromIndex = text.indexOf('be', 10);
var reverseIndex = text.lastIndexOf("be");
var fromIndexReverse = text.lastIndexOf("be", 10);
console.log(text);
console.log(startIndex);// 3
console.log(fromIndex);// 16
console.log(reverseIndex);// 16
console.log(fromIndexReverse);// 3
console.log(text.indexOf('z')); // -1

// Replacing characters
var newtext = `Cause of World War II: Hitler's invasion of Poland in September 1939 drove Great Britain and 
France to declare war on Germany, and World War II had begun.`;
first_replace_text = newtext.replace(banned_word, alternet_word);
console.log(first_replace_text);
// to replace text globally using regular expression
var regex_text = /World War II/g;
globally_replace_text = newtext.replace(regex_text, alternet_word);
console.log(globally_replace_text);