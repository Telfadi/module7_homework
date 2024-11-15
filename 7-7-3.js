const users = [
    {name: 'Kate', age: 28},
    {name: 'Alice', age: 10},
    {name: 'Tatyana', age: 32},
]
const adult = users.filter(user => user.age >= 18);
const newArr = users.map(user => user.name);
console.log(adult)
console.log(newArr)
