const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = [];
  data.forEach((person) =>{
    if(person.profession === "developer"){
      developers.push(person);
    }
  });

  console.log("Developers:", developers);
  return developers;
}

// 2. Add Data
function addData() {
  let name= prompt("Enter name:");
  let age= prompt("Enter age:");
  let profession= prompt("Enter profession:");
  // createing new object
  let newData ={
    name : name,
    age : age,
    profession : profession
  }

  //adding data

  data.push(newData);

  console.log("Data added:", newData);
  return newData;
}

// 3. Remove Admins
function removeAdmin() {
  //fitering out admins
  let admins = data.filter(person => person.profession === "admin");

  //if data array defined with let keyword
  // data = data.filter(person => person.profession !== "admin");


  //for const keyword 
  //getting indices of admins
  const adminIndex = [];
  data.forEach((person, index) => {
    if(person.profession === "admin"){
      adminIndex.push(index);
    }
  });

  //removing admins
  adminIndex.reverse().forEach(index =>{
    data.splice(index, 1);
  });


  console.log("Removed admins:", admins);
  return admins;
}

// 4. Concatenate Array
function concatenateArray() {
  const fruit1 = ["apple", "orange", "grapes"];
  const fruit2 = ["lime", "mango", "cherry"];

  const fruits = fruit1.concat(fruit2);

  console.log("Concatenated array:", fruits);
  return fruits;
}

// 5. Average Age
function averageAge() {
  //calculating total age sum
  const total = data.reduce((sum, person) => sum+person.age,0);
  const avg = total/data.length;
  console.log("Average age:", avg);
  return avg;
}

// 6. Age Check
function checkAgeAbove25() {
  const isValid = data.some(person =>  person.age > 25);

  console.log(isValid);

  return isValid;
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessions = [];
  data.forEach(person => {
    if(!uniqueProfessions.includes(person.profession)){
      uniqueProfessions.push(person.profession);
    }
  });

  console.log("Unique Professions:" , uniqueProfessions);
  return uniqueProfessions;
}

// 8. Sort by Age
function sortByAge() {
  const sortedArray = data.sort((a,b) => a.age - b.age);

  console.log("Sorted array:",sortedArray);

  return sortedArray;

}

// 9. Update Profession
function updateJohnsProfession() {
  const updatedArr = data.map(person => {
    if(person.name === "john"){
      person.profession = "manager";
      console.log("Updated:",person);
    }
    return person;
  });
  return updatedArr;
}

// 10. Profession Count
function getTotalProfessions() {
  const professionsCount = data.reduce(
    (count,person) => {
      if(person.profession === "developer"){
        count.developers++;
      }else if(person.profession === "admin"){
        count.admins++;
      }
      return count;
    },{developers:0, admins:0}
  );

  console.log("total Developers:" , professionsCount.developers);
  console.log("total admins:", professionsCount.admins);
}
