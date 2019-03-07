var array = [10, 2, 5, 1, 9];

array.sort();



function customSort(a,b) {

  return a-b

}



//console.log(array.sort(customSort));





// advanced sorting



var students = [

  { id: 1, name: "bruce",    age: 40 },

  { id: 2, name: "zoidberg", age: 22 },

  { id: 3, name: "alex",     age: 22 },

  { id: 4, name: "alex",     age: 30 }

];



function sortName(a,b) {

  var nameDifference = a.name > b.name;

  if (nameDifference === 0) {

    return a.age - b.age;

  } else {

    return nameDifference;

  }

}



function sortAge(a,b) {

  return a.age - b.age;

}



console.log(students.sort(sortName));

