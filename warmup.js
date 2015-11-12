


// Define a function called factorial that takes
// a number as an argument and returns the factorial.
// Use Array.reduce().

function factorial(num){
    var arr = []
    for(var i = num; i > 1; i--){
        arr.push(i);
    }
    var newF = arr.reduce(test){
      return newF;
    }

    function test(prev, current){
      return prev * current;
    }
}
console.log(factorial(4));


// console.log(factorial(thisArray));

// Define a function called stringCapitalize that
// takes a string as an argument and returns the same
// string with each letter of the first word capitalized. Use Array.map().

// function stringCapitalize(string) {
//   for(var i = 0; i < string.length; i++){ //change string to an array
//     var orgArray = string.split(' ');
//     var newArray = [];
//
//     orgArray.map(function(word){ //loop through each index in the array with array.map
//       var firstLetter = word.charAt(0).toUpperCase();
//       var restOfWord = word.slice(1);
//       var newWord = firstLetter + restOfWord;
//       newArray.push(newWord);
//     });
//   }
//   return newArray.join(' ');
// }
//
// console.log(stringCapitalize('will it snow again today'))
