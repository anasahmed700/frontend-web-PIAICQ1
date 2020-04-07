var dayOfWeek = "sunday";
dayOfWeek = dayOfWeek.slice(0, 3);
console.log(dayOfWeek);
switch(dayOfWeek){
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