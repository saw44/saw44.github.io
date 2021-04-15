/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

const maxOfTwoNumbers = (a,b) => {
    if(a>b){
        return a 
    }
    else{
      return b
    }
   
  };
  console.log('1. The number ' + maxOfTwoNumbers(8,5) + ' is greater that 5.');
  
  const maxOfThree = (c,d,e) => {
    if(c>d && c>e){
      return c
    }
    else if(d>c && d>e) {
      return d
      
    }
    else {
      return e

    }
  };
  console.log( '2. The maximum of the 12, 5 and 9 is ' + maxOfThree(12,5,9) + '.');
  
  /*
  3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  const isCharacterAVowel = (char) => {
    
    if( char=='a'|| char=='e'|| char=='i'|| char=='o'|| char=='u'|| char=='A'|| char=='E'
    || char=='I' || char=='O'|| char=='U'){
      return true
    }
    else{
      return false
    }
    
  };
  console.log('3.' + isCharacterAVowel('I'));
  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
  */
  var arr=[2,4,6,8];
  let i;
  var sum=0;
  var product=1;
  const sumArray = () => {
    
    for( i=0; i <= arr.length-1; i++){
      sum+= arr[i] ;
    }
    return sum
  };
  const multiplyArray = () => {
    for(i=0; i <= arr.length-1; i++){
      product*= arr[i];

    }
    return product
  }
  console.log('4.'+ sumArray(arr[i] + multiplyArray(arr[i])));
  
 let signs=['Pisces', 'yes', '100', 'dope'];
  const findArguments = (arguments)=>{

    return arguments.length;

  }
  console.log('5. ' + findArguments(arguments));
 
  let string = 'Andromeda'
  const reverseString = () => {
     revString=[];
     for(let i= string.length; i>=0; i--) {
       revString.push(string[i]);
     }
     return revString.join('');
  
  };
  console.log('6.' + reverseString());

  
  
  arr=['hell-born', 'heaven-sent', 'angel', 'manacles', 'kisses'];
 let swap = 0;
 let longestWord = '';
 const findLongestWord = () => {
    for( i=0; i < arr.length-1; i++){
      if(arr[arr.length-1].length <= arr[i].length){
        swap = arr[i];
        arr[i]=arr[arr.length-1];
        arr[arr.length-1]=swap;
      }
    }
    return arr[arr.length-1];
  };
console.log('7.' + findLongestWord());
  
 
 let yarn = ['ball', 'skein', 'hank', 'roving', 'worsted'];
 let n = 4;
 let longWords = '';
  const filterLongWords = () => {
    for(let y=0; y <= yarn.length-1; y++ ){
      if(yarn[y].length > n){
        longWords += yarn[y] + ' '
      }

    }
    return longWords;
  };
  console.log('8.' + filterLongWords());
  