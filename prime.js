/*This lists the prime numbers between 1 and 10.
This is accomplished by checking one number at a time within the for loop.
The variable newNum is the number chosen and  the divisor is the variable 
that you will divide the newNum by and it should be within the range of 2 to newNum - 1.
And if the quotient remainder is 0, then the newNum is not prime. Then you need to cut
the loop with the "break" so that you can come out of the loop and take another value 
for the newNum.*/
let begin = 1;
let stop = 10;
for(let newNum = begin; newNum <= stop; newNum++){
    let primeNum = true;
    for (let divisor = 2; divisor < newNum; divisor++){
        if (newNum % divisor === 0){
            primeNum = false;
            break;
        }
    }
    if(primeNum){
        console.log(newNum);
    }
}

    /*
if(a/counter == a || a/counter ==1){
    flag = true;
}
else if(a%counter == 0 && counter!= a){
    flag = false;
    break;
}
if (flag == true){
    console.log( a + ' is a prime')
}
else{
    console.log( a + ' is not a prime')
}
counter++;
}*/