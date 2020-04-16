var dayOfWeek = "sunday";
dayOfWeek = dayOfWeek.slice(0, 3);
console.log(dayOfWeek);
switch(dayOfWeek){
    // switch cases performs strict comparison like === type checking
    case "sat":
        console.log("Whoopee!");
        break;
    case "sun":
        console.log("Yeah!");
        break;
    case "fri":
        console.log("TGIF!");
        break;
    default:
        console.log("shoot me now!");
}

// grouping the cases
console.log('grouping of cases example....');
var letter = 'l';
switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(letter,'is a vowel!');
        break;
    default:
        console.log(letter, 'is not a vowel');
        break;
}