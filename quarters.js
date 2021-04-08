/*You got a $4 cookie from the vending machine. You paid $10 and got quarters as change.
How many quarters did you get? The counter is actually counting dollars that will be converted to quarters when
the program is run. */
let cookie= 4;
let paid = 10;
let change = paid - cookie;
let quarters;
let counter = 1;
while(counter <= change){
   
    quarters = change * 4;
    counter++;
}
console.log(quarters);