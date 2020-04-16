var num = 31;
var isPrime = true;
for (let i = 2; i < num; i++) {
    if(num % i === 0){
        console.log(num, "is divisible by", i);
        isPrime = false;
    } 
}
if(isPrime){
    console.log(num, "is prime number!");
}

