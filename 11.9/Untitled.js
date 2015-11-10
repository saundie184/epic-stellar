// Use Array.push() to add 5 more dates to three different candies in store4.
//  - Use Array.pop() to remove 1 date from each of the other two candies.
//  - Use Array.unshift() to add 3 sale dates to store2.
//  - Use Array.shift() to remove 2 sale dates from different candies.
//  - Use Object.keys() to generate an arrays of dates from store1.
//  How can you use this to iterate over the store1 object?
//  - Try using a new type of loop - for..in - to iterate over the object. Is it working like expected?
//  Read about Object.hasOwnProperty() method on MDN.
//----------
//- Use Object.keys() to generate an arrays of dates from store1.


var store1 = {
  '2015-01-06': [
    ['Dark Chocolate Crunchies', '4.39', 1],
    ['Mint Wafers', '1.19', 3],
    ['Peppermint Poppers', '2.48', 2],
    ['Peanut Butter Buttered Peanuts', '1.89', 6]
  ],
  '2015-01-07': [
    ['Dark Chocolate Crunchies', '4.39', 4],
    ['Berry Bites', '7.99', 3],
    ['Peppermint Poppers', '2.48', 1],
    ['Caramel Twists', '.60', 7]
  ],
  '2015-01-08': [
    ['Banana Bunches', '4.63', 1],
    ['Peppermint Poppers', '2.48', 3],
    ['Mint Wafers', '1.19', 7],
    ['Dark Chocolate Crunchies', '4.39', 2],
    ['Caramel Twists', '.60', 1]
  ],
  '2015-01-09': [
    ['Caramel Twists', '.60', 3],
    ['Peanut Butter Buttered Peanuts', '1.89', 2]
  ],
  '2015-01-10': [
    ['Peanut Butter Buttered Peanuts', '1.89', 7],
    ['Caramel Twists', '.60', 2],
    ['Berry Bites', '7.99', 3],
    ['Dark Chocolate Crunchies', '4.39', 8],
    ['Mint Wafers', '1.19', 2]
  ]
};

console.log(Object.keys(store1));
//  - Use Array.unshift() to add 3 sale dates to store2.

var store2 = {
  'inventory prices': {
      'Dark Chocolate Crunchies': 4.29,
      'Mint Wafers': 1.09,
      'Peppermint Poppers': 2.38,
      'Peanut Butter Buttered Peanuts': 1.79,
      'Berry Bites': 7.89,
      'Caramel Twists': .50,
      'Banana Bunches': 4.53
  },
  'sale dates': {
      'Dark Chocolate Crunchies': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-08'],
      'Mint Wafers': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-09'],
      'Peppermint Poppers': ['2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Peanut Butter Buttered Peanuts': ['2015-01-07', '2015-01-07'],
      'Berry Bites': ['2015-01-06', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10'],
      'Caramel Twists': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Banana Bunches': ['2015-01-10', '2015-01-10']
  }
};
//----

// function addMoreDates (candyName){
//   for(var data in store2){
//       var dateList = store2['sale dates'][candyName];
//       dateList.shift('2015-01-06', '2015-01-06');
//       return dateList;
//     }
//     //find the key that is 'sale dates''
//     //find which candy to add more sales dates to
//     //if input matches data
//
// }
// console.log(addMoreDates('Dark Chocolate Crunchies'));
//create a function that takes a candy input and adds dates to it
// function addMoreDates (candyName){
//   for(var data in store2){
//       var dateList = store2['sale dates'][candyName];
//       dateList.unshift('July 9', 'July 10', 'July 11');
//       return dateList;
//     }
//     //find the key that is 'sale dates''
//     //find which candy to add more sales dates to
//     //if input matches data
//
// }
// console.log(addMoreDates('Dark Chocolate Crunchies'));

var store4 = {
      'Dark Chocolate Crunchies': {
        'cost': 4.34,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08']
      },
      'Mint Wafers': {
        'cost': 1.14,
        'sold on': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09']
      },
      'Peppermint Poppers': {
        'cost': 2.43,
        'sold on': ['2015-01-07', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10', '2015-01-10']
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.84,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-08']
      },
      'Berry Bites': {
        'cost': 7.94,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10', '2015-01-10']
      },
      'Caramel Twists': {
        'cost': .55,
        'sold on': ['2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10']
      },
      'Banana Bunches': {
        'cost': 4.58,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-10']
      }
};

//  - Use Array.pop() to remove 1 date from each of the other two candies.

// function addDates(nameInput){
//   for(var candies in store4){
//     if(candies == nameInput){
//       var dateList = store4[candies]['sold on'];
//       dateList.pop();
//       return dateList;
//     }
//
//   }
// } //create a function that takes the input of the candy
// //find the key that is the same as the input
// //access the value of that key
// //push data to that value
// console.log(addDates('Berry Bites'));
// console.log(addDates('Peppermint Poppers'));

// Use Array.push() to add 5 more dates to three different candies in store4.

// function addDates(nameInput){
//   for(var candies in store4){
//     if(candies == nameInput){
//       var dateList = store4[candies]['sold on'];
//       dateList.push('July 9', 'July 10', 'July 11', 'July 12', 'July 13');
//       return dateList;
//     }
//
//   }
// } //create a function that takes the input of the candy
// //find the key that is the same as the input
// //access the value of that key
// //push data to that value
// console.log(addDates('Caramel Twists'));
// console.log(addDates('Banana Bunches'));
// console.log(addDates('Peanut Butter Buttered Peanuts'));
