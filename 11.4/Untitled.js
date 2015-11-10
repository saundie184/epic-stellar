// var gSchool = {
//   title: "full-stack"
// };
//
//
// //when a value to a primitive, it takes on the value, but a reference type points to the same space.
//
// // primitive = primitive's value
// // reference = reference's reference
// var gPrim = 'full-stak';
// //same thing
// var notSoGPrim = gPrim;
// var notSoGPrim = 'full'
//
// gPrim = 'data-science';
// console.log(notSoGPrim)

//reference types are like PO boxes; multiple people can access the same address
//primitive types(values) are like tattoos


//Control structures
//if statments, etc.

// var teachers = ['eugene, logan', 'jordon'];
//
// for(var i = 0; i < teachers.length; i++)
// var teacher = teachers[i]
// console.log(teacher);

// for (var key in person) {
//   console.log(person[key]);
// }
var gSchool = {
  title: 'fullstack',
  studentct: 20,
  teacherCt: 3
}
for(var key in gSchool){
  console.log('key:' + key)
  console.log('value: ' + gSchool[key])
};
