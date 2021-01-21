// 1.  **Write a function to reverse a string**
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('hello');
// 2.  **Write a function which helps to achieve multiply(a)(b) and returns product of a and b**
function multiplyNums(a, b) {
  return a * b;
}

multiplyNums(2, 4); // 8
multiplyNums(5, 3); //15

//3. **Design a function which can recieve variable number of arguments in parameters and prints them**
function printArgs(...args) {
  console.log(args);
}
printArgs('one', 'two', 'three');

//4. **Sort the given array of integers in ascending or descending order**
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

//5. **Create a range function which returns an array for the provided inputs as start and end**
function range(start, end) {
  const arr = [];
  if (start < end) {
    arr.push(start);
    while (start < end) {
      arr.push((start += 1));
    }
  }
  return arr;
}
console.log(range(2, 0));
