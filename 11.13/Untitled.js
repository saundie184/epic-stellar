var myAry = [1, 2, 3, 4, 5, 6]

function forEach(array, callbackFunc) {
  for (var i = 0; i < array.length; i++) {
    callbackFunc(array[i], i, array)
  }
};
//-----

forEach(myAry, function(elem, idx, array) {
  console.log(arguments.length);
  console.log(elem);
  console.log(idx);
  console.log(array);
};

addEventListener('click', function(eventParam) {
  console.log(arguments.length);
});
