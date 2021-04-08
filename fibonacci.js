let a = 0;
let b = 1;
let sum = 0;
let counter =1;
;

while (counter <= 10){
    if ( a == 0 && b == 1){
        process.stdout.write('The Fibonacci series: ' + a + ' ' + b +',' )
    }
    sum = a + b;

    process.stdout.write(sum + ' ');
    a = b;
    b = sum;
    counter++;
}
