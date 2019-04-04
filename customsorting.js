
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 3, name: "zoidberg", age: 22 },
  { id: 2, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];


students.sort(function(a,b){
    if(a.name === b.name){
      return a.age - b.age
    }

    if (a.name > b.name){
      return 1;
    } else {
      return -1;
    };
  });
console.log(students);


