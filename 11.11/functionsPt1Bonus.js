// Bonus: Write a function called oddNumbers that takes a random integer,
// from 0 to 100. If the number is greater than 40
// then output all the odd integers from 40 to the random number.
// If the number is less than 40, output all the odd integers from 0 to 40.

// Math.floor(Math.random(0, 100))

//function have one parameter num
function oddNumbers(num) {
  //create an if loop
  if(num > 40){
//for loop to print every number 40 -num
//check if num is odd
    for(var i = 40; i <= num; i++){
      if(i % 2 !== 0){
        console.log(i);
      }
    }
//if it is odd, continue
//if it is even, add one and continue
//only print if output is i % 2 != 0
  } else {
    for(var i = 1; i < 40; i++){
      if(i % 2 !== 0){
        console.log(i)
      }
    }
  }
}

console.log(oddNumbers(77));
