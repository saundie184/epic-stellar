//Define a function called oldestPerson that takes an object with names as keys and ages
// as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name
//of the oldest living person.
var family = {
    'Chuck': 22,
    'Brian': 46,
    'Sally': 60
  };

function oldestPerson(objectOfAgeRefs) {
  //determine how many key:values are in the object
  var numInFam = Object.keys(objectOfAgeRefs).length;
  var ageArray = [];
  for(var i = 0; i < numInFam; i++){
    for(var name in objectOfAgeRefs){
        var age = objectOfAgeRefs[name];
        ageArray.push(age);
        }
        var oldest = 0
        for(var x = 0; x <= oldest; x++){
            if(ageArray[x] > oldest){
              var oldest = ageArray[x];
            }
          }
      for(var name in objectOfAgeRefs){
          if(oldest === objectOfAgeRefs[name]){
            return name;
          }
        }
      }
    }

console.log(oldestPerson(family));
