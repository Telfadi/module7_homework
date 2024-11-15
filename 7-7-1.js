function printInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  const person = {
    name: "Tatyana",
    age: 45
  };
  printInfo.call(person);