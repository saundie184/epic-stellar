//Define a function called isDivisible that takes two arguments and returns a boolean.
//Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible(num1, num2) {
    if(num1 % num2 === 0){
      return true;
    } else {
      return false;
    }
}

console.log(isDivisible(3,2)); //expect true


//Define a function called evenNumbers that takes a random integer,
 //from 0 to 100, and outputs all the even integers from 0 to that random number.


// function evenNumbers(num) {
// //if num is even, print all numbers from 0 to num
// var i = 0;
//   for(; i < num; i++){
//     if(i % 2 === 0){
//       console.log(i);
//     }
//   }
// };
//   //check every number from 0 to the input
//   //if it divisible by 2 (use modulus
//   //if it is print out
//
// console.log(evenNumbers(25));

//4. Define a function called stringCapitalize that takes a string
//as an argument and returns the same string with the first letter of
//each word capitalized. Assume that each individual word is separated by only one space.

// function stringCapitalize (string) { //takes an argument that is a string
//     var listOfWords = string.split(" ");   //split the string so that it is an array;
// //make the first word capitalized
//     // return listOfWords[0]; //change the first character to a capital and then replace the first
//     // //character of the orginial
//     var numOfWords = listOfWords.length;
//     var newArray = [];
// for(var i = 0; i < numOfWords; i++){ //loop through all indexes in the array
//     var firstLetter = listOfWords[i].charAt(0);
//     var restOfWord = listOfWords[i].slice(1);
//     var newWord = firstLetter.toUpperCase() + restOfWord;
//      //need to make it output both from the loop
//      newArray.push(newWord);
//
//      }
//      return newArray.join(" "); //concatenate each index in the array to be a string
//    }
//
// console.log(stringCapitalize("the cat jumped the fence"));

//3.Define a function called discountPercentage that returns the total discount ($),
// given the original amount and discount percentage (as arguments).
//Return a warning if the discount amount is greater than 100 or less that 0 percent.

// //create name of function with 2 parameters
// function discountPercentage(orgPrice, percentOff){
//   var changeDecimal = (percentOff / 100);
//   var percentOff = orgPrice * changeDecimal;
//   return percentOff;
//
// }
// //first is the original amount
// //second is the discount percentage
//
// //change the percent to a decimal and multiply that times the original cost
// //output the discount $
//  console.log(discountPercentage(120, 30))


//2. Define a function called isEqual that takes two arguments and returns a boolean.
// Return true if the two arguments are equal and return false if they are not.

// function isEqual(x,y){
//   if(x === y){
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(isEqual(4,7));
//
// //1. Define a function called sum that takes two numbers as arguments and returns their sum.
//
// function sum(num1,num2){
//   return num1+num2;
// }
// console.log(sum(3,4));
