/*Those numbers divisible by 3 print fizz; for those divisible by 5 print buzz and if divisible by both print fizz buzz
You need to put the condition checking for both as first because it will be skipped if listed last. 
for(let counter=1; counter<=50; counter++){
    
    if(counter%3==0 && counter%5==0){
        console.log (counter + " Fizz, Buzz");
    }
    else if(counter%3==0){
        console.log ("Fizz");
    }
    else if(counter%5==0){
        console.log("Buzz");
    }
   
    
}
*/
let counter= 1;
while(counter<= 50){

 if(counter%3==0 && counter%5==0){
        console.log (counter + " Fizz, Buzz");
    }
    else if(counter%3==0){
        console.log ("Fizz");
    }
    else if(counter%5==0){
        console.log("Buzz");
    }
    counter++;
}
