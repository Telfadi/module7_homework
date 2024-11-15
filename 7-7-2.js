function calculate(a, b, operation) {
    return operation(a, b)
};

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const obj = {
    a: null,
    b: null, 
    operation: null
};

const arr = [2, 3, sum]
console.log(calculate.apply(obj, arr))
