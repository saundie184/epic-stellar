// alert('i am linked')


var animals = {
  duck: 'quack',
  dog: 'bark',
  cat: 'meow',
  cow: 'moo',
  mouse: 'squeak',
  snake: 'hiss'
}
//create a loop that will make each row
// //make as many rows as there are keys
// var body = document.getElementsByTagName('body')[0]
// var tbl = document.createElement('table')
// body.appendChild(tbl);

var body = document.getElementsByTagName('body')[0]
var tbl = document.createElement('table')

//set up variables
  var animalNames = Object.keys(animals);
  var numAnimals = Object.keys(animals).length;
//loop through all keys in the object
  for(var i = 0; i < numAnimals; i++){
    //for each key, create a row
    var row = document.createElement('tr');
    tbl.appendChild(row);
    //for each, create a cell for names
    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerText = animalNames[i];
    //for each create a second cell for sounds
    var cell2 = document.createElement('td');
    row.appendChild(cell2)
      //use the object key to call the matching value
    cell2.innerText = animals[animalNames[i]]
    }
//appending all elements
body.appendChild(tbl);
tbl.appendChild(row);


// //write a function that outputs each key
//
// function animalTable(type, sound){
//   for(var type in animals){
//     console.log(type)
//   }
// }
//
// for(var i = 0; i < numAnimals; i++){
//   for
//   console.log(animals(i))
// }


// var animalTable = document.getElementsByTagName('table')[0]
//
// var firstRow = document.createElement('tr')
// animalTable.appendChild(firstRow)
//
//   var firstCell = document.createElement('td')
//   firstRow.appendChild(firstCell)
//   firstCell.innerText = 'duck'
//
//   var secondCell = document.createElement('td')
//   firstRow.appendChild(secondCell)
//   secondCell.innerText = animals.duck  //'quack'
//
// var secondRow = document.createElement('tr')
// animalTable.appendChild(secondRow)
//
//   var thirdCell = document.createElement('td')
//   secondRow.appendChild(thirdCell)
//   thirdCell.innerText = 'dog'
//
//   var fourCell = document.createElement('td')
//   secondRow.appendChild(fourCell)
//   fourCell.innerText = animals.dog //'bark'
