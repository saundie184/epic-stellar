//Objects

//Literal notation
var object = {};
// console.log(object);

var person = {
  firstName: "Bruce" //key is the firstName
}

var gSchool = {
  title: "full-stack", //string is a primitive type
  'current city': 'fort collins', // use quotes to create a space
  teachers: ["logan", "eugene", "jordan"]//don't need comma after last one
}

//Dot notation
//use dot notation after you have created a value to add new keys
//objectname.key = "value"

gSchool.favoriteTeacher = "Eugene" //simple to read

gSchool["TodaysLecture"] = "Objects" //Added a key-value pair using bracket notation
gSchool.Thursday = 'today'//using single quotes takes things inside more literally


// console.log(gSchool.title); //use the key to get the value
// console.log(gSchool['title']);// bracket notation
// console.log(gSchool['current city']); //use bracket since it has a space in it
//
// var someString = 'teachers'
// console.log(gSchool[someString]);
// console.log(gSchool['teachers']); //same as the above

// console.log(gSchool.favoriteTeacher);
gSchool.favoriteTeacher = "jordan";
// console.log(gSchool.favoriteTeacher);
// console.log(gSchool)
gSchool['favoriteTeacher'] = "logan";
// console.log(gSchool['favoriteTeacher']);


//keyword = typeOf, function, var

//keyword delete
//delete object.key
delete gSchool['current city'];
console.log(gSchool);
delete gSchool.teachers[1];//runs delete on an array since you are accessing the array, but still leaves the index there
console.log(gSchool.teachers);

//remove removes full index, delete just removes content, delete will leave undefined;
console.log(typeof gSchool);

//An array is an object
