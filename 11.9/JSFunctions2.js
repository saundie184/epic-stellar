//Define a function called factorial that takes
// a random number as an argument and then returns
// the factorial of that given number.

function factorial(num){
  //write a loop to iterate every number between 1 and the num
  //push those numbers to an array
  var arrayNumRange = []
  for(var i = 1; i <= num; i++){
      arrayNumRange.push(i);
  }
  var start = 1;
  for(var x = 2; x <= num; x++){
    start = start * x;
  }
//take each index and multiply it by the next index
//find the product of the indexes
return start;
//num * num-1
};

console.log(factorial(4)); //expect 24










//Define a function called longestWord that takes a string
//and returns the longest word in the string.

// function longestWord (stringOfWords) {
//   //change the string to an array
//   var wordArray = stringOfWords.split(' ');
//   //create an object to store the names as keys and lengths as values
//   var wordLengthObj = {};
//   for(var i = 0; i < wordArray.length; i++){
//     wordLengthObj[wordArray[i]] = wordArray[i].length;
//     }
//   //create an array of the lengths
//   var ageArray = [];
//   for(var j = 0; j < Object.keys(wordLengthObj).length; j++){
//     for(var word in wordLengthObj){
//       ageArray.push(wordLengthObj[word]);
//       }
//   }
// //find the greatest number in the length
//   var longest = 0;
//   for(var x = 0; x <= longest; x++){
//           if(ageArray[x] > longest){
//               var longest = ageArray[x];
//               }
//       }
//       // console.log(longest);
//   //return the key (the word) with the longest length
//   for(var name in wordLengthObj){
//       if(longest === wordLengthObj[name]){
//         return name;
//         }
//     }
//   }
//
// console.log(longestWord('it is going to snow tomorrow'));

//Define a function called oldestPerson that takes an object with names as keys and ages
// as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name
//of the oldest living person.

// var family = {
//     'Chuck': 22,
//     'Brian': 46,
//     'Sally': 60
//   };
//
// function oldestPerson(objectOfAgeRefs) {
//   //determine how many key:values are in the object
//   var numInFam = Object.keys(objectOfAgeRefs).length;
//   var ageArray = [];
//   for(var i = 0; i < numInFam; i++){
//     for(var name in objectOfAgeRefs){
//         var age = objectOfAgeRefs[name];
//         ageArray.push(age);
//         }
//         var oldest = 0;
//         for(var x = 0; x <= oldest; x++){
//             if(ageArray[x] > oldest){
//               var oldest = ageArray[x];
//             }
//           }
//       for(var name in objectOfAgeRefs){
//           if(oldest === objectOfAgeRefs[name]){
//             return name;
//           }
//         }
//       }
//     }
//
// console.log(oldestPerson(family));
