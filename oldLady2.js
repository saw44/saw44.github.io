/*

There was an old lady who swallowed a fly
I don’t know why she swallowed a fly – Perhaps she’ll die!

There was an old lady who swallowed a spider
That wriggled and jiggled and tickled inside her!
She swallowed the spider to catch the fly;
I don’t know why she swallowed a fly – Perhaps she’ll die!

There was an old lady who swallowed a bird;
How absurd to swallow a bird!
She swallowed the bird to catch the spider
That wriggled and jiggled and tickled inside her!
She swallowed the spider to catch the fly;
I don’t know why she swallowed a fly – Perhaps she’ll die!

There was an old lady who swallowed a cat;
Fancy that! She swallowed a cat!
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider
That wriggled and jiggled and tickled inside her!
She swallowed the spider to catch the fly;
I don’t know why she swallowed a fly – Perhaps she’ll die!

There was an old lady that swallowed a dog;
What a hog, to swallow a dog!
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider
That wriggled and jiggled and tickled inside her!
She swallowed the spider to catch the fly;
I don’t know why she swallowed a fly – Perhaps she’ll die!

There was an old lady who swallowed a goat;
She just opened her throat and swallowed a goat!
She swallowed the goat to catch the dog,
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider
That wriggled and jiggled and tickled inside her!
She swallowed the spider to catch the fly;
I don’t know why she swallowed a fly – Perhaps she’ll die!

There was an old lady who swallowed a cow;
I don’t know how she swallowed a cow!
She swallowed the cow to catch the goat,
She swallowed the goat to catch the dog,
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider
That wriggled and jiggled and tickled inside her!
She swallowed the spider to catch the fly;
I don’t know why she swallowed a fly – Perhaps she’s dead
There was an old lady who swallowed a horse;

…She’s dead, of course!

This code below is how I determined where to slice the sent3
    let pos = sent3.indexOf(`catch`);
          console.log(sent3.length);
      console.log(pos);


*/

const animal = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
let i;
let unique;
let newSent1 = ``;
let newSent3 = ``;
let sent1 = ` There was an old lady who swallowed a ` + animal[1] + `.\n`;
let sent2 = ` That wriggled and jiggled and tickled inside her!\n`;
let sent3 = ` She swallowed the ` + animal[1] + ` to catch the ` + animal[0] + `.\n`;
let sent4 = ` I don’t know why she swallowed a fly – Perhaps she’ll die!\n`;
let sent3A =``;
let sent3B = ``;
let sent3C =``;
let sent3D =``;
let sent3E = ``;

let newSent1A =``;
let newSent1B =``;
let newSent1C =``;
let newSent1D =``;
let newSent1E =``;

let newSent3A = ``;
let newSent3B = ``;
let newSent3C = ``;
let newSent3D = ``;
let newSent3E = ``;

let newStanza = ``;
let newStanzaA = ``;
let newStanzaB = ``;
let newStanzaC = ``;
let newStanzaD = ``;
let newStanzaE = ``; 
i = 0;
const oldLady = () => {
   
        if(sent1.includes(animal[1])) {
            newSent1 = sent1.replace(animal[1], animal[2]);
            sent3A = sent3.replace(animal[1], animal[2]);
           newSent3A = sent3A.slice(0, 26) + ` catch the ` + animal[1] + `.\n`;
          uniqueA = `How absurd to swallow a bird!\n`;
              newStanzaA = newSent1 + uniqueA + newSent3A + sent2 + sent3 + sent4;
             
          return newStanzaA    
        }


         if(newSent1.includes(animal[2])){
        newSent1A = newSent1.replace(animal[2], animal[3]);
        sent3B = sent3A.replace(animal[2], animal[3]);
        newSent3B = sent3B.slice(0, 25) + ` catch the ` + animal[2] + `.\n`; 
        uniqueB = `Fancy that! She swallowed a cat!\n`;
        newStanzaB = newSent1A.concat(uniqueB + newSent3B + newSent3A + sent2 + sent3 + sent4);
        
        return newStanzaB
        }
        

         if(newSent1A.includes(animal[3])){
            newSent1B = newSent1A.replace(animal[3], animal[4]);
            sent3C = sent3B.replace(animal[3], animal[4]);
            newSent3C = sent3C.slice(0, 25) + ` catch the ` + animal[3] + `.\n`; 
            uniqueC = `What a hog, to swallow a dog!\n`;
            newStanzaC = newSent1B.concat(uniqueC + newSent3C + newSent3B + newSent3A + sent2 + sent3 + sent4);
           return newStanzaC;       
        } 
        

          if(newSent1B.includes(animal[4])){
            newSent1C = newSent1B.replace(animal[4], animal[5]);
            sent3D = sent3C.replace(animal[4], animal[5]);
            newSent3D = sent3D.slice(0, 26) + ` catch the ` + animal[4] + `.\n`; 
            uniqueD = `She just opened her throat and swallowed a goat!\n`;
            newStanzaD = newSent1C.concat(uniqueD + newSent3D + newSent3C + newSent3B + newSent3A + sent2 + sent3 + sent4);
            
            
            return newStanzaD
        }
        
     
         if(newSent1C.includes(animal[5])){
            newSent1D = newSent1C.replace(animal[5], animal[6]);
            sent3E = sent3D.replace(animal[5], animal[6]);
            newSent3E = sent3E.slice(0, 25) + ` catch the ` + animal[5] + `.\n`; 
            uniqueE = ` I don't know how she swallowed a cow!\n`;
            newStanzaE = newSent1D.concat(uniqueE + newSent3E + newSent3D + newSent3C + newSent3B + newSent3A + sent2 + sent3 + sent4);
  
            
            return newStanzaE
        }
        return  newStanzaA + "  " +newStanzaB + "  "+ newStanzaC + "  "+ newStanzaD + "  "+ newStanzaE; 
    
  
} 
  console.log(oldLady())      


    
