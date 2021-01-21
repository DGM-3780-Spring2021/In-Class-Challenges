// Square all the positive numbers of the array and return the output array
const arr = [1, -2, 6, 2, 5, -4, 9]

const posSquaredArr = arr.filter(val => val >= 0).map(val => val * val)

console.log(posSquaredArr)


// Write a function to reverse a string
function reverseString(str) {
    let customString = ""

    for (let i = str.length - 1; i >= 0; i--) {
        customString += str[i];
    }
    return customString
}
reverseString("conner");


// Sort the given array of integers in ascending or descending order
const sortArr = [72, 26, 100, 69, 14, 87, 5, 21]

sortArr.sort(function(a, b) {
    return a - b
})