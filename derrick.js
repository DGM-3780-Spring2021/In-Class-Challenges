// **Write a function to reverse a string**
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('hello');
// **Write a function which helps to achieve multiply(a)(b) and returns product of a and b**
// Example
function multiplyNums(a, b) {
  return a * b;
}

multiplyNums(2, 4); // 8
multiplyNums(5, 3); //15

// **Design a function which can recieve variable number of arguments in parameters and prints them**

function printArgs(...args) {
  console.log(args);
}
printArgs('one', 'two', 'three');

// **Sort the given array of integers in ascending or descending order**
const numbersArray = [1, 2, 3, 4, 5, 6];
function sortDown(nums) {
  nums.sort(function (a, b) {
    return b - a;
  });
  return nums;
}
console.log(sortDown(numbersArray));
function sortUp(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  return nums;
}
console.log(sortUp(numbersArray));

// **Write a function which can convert the time input given in 12 hours format to 24 hours format**
