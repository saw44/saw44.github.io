/* The range of the loop is from digits 371  until all are exhausted in the loop and testNum
has no digits left. Recall that the modulus only gives the remainder of a division problem.
The digits are extracted by the modulus and the Math.floor(testNum/10)
gives the next left over digits to be processed in the loop. 
It looks like Math.floor(371/10)= 37 | Math.floor(37/10)= 3*
The modulus removing them looks like  371 % 10 = 1 | 37 % 10 = 7 | 3 % 10 = 3 */ 
let num = 407;
let testNum = num;//This is the start of the loops range
let sum = 0;
let remainder;
let digitSq;

while(testNum != 0){ //This is the end of the loops range
    let remainder = testNum % 10;
    console.log('The digit '+ remainder + ' has been extracted.');
    digitSq = remainder * remainder * remainder;
    sum += digitSq;
    console.log('The current sum of the cubed digits is ' + sum);
    testNum = Math.floor(testNum / 10); //This line is where you get a another number to process.
    
}

//



if(sum == num ){
    console.log(num + ' is an Armstrong number.');
}
else{
    console.log(num + ' is not an Armstrong number.')
}