const unUniqueArr = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueSet = new Set(unUniqueArr);
const uniqueArr = Array.from(uniqueSet);
uniqueArr.sort((a, b) => a - b);
console.log(uniqueArr);