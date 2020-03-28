var score = 91;
if (score >= 80 && score <= 100){
    console.log("Grade A");
    if (score > 90){
        console.log("Reward $100");
    } else if (score > 85){
        console.log("Reward $50");
    } else {
        console.log("Reward $20");
    }
} else if (score >= 70 && score < 80){
    console.log("Grade B");
} else if (score >= 60 && score < 70){
    console.log("Grade C");
} else{
    console.log("Failed");
}
