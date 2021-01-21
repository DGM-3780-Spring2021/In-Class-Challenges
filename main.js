const exampleString = "This is a sample string on which to test"
const exampleArray = [-1, 1, 2, 20, 3, 4, 5, 6]

// Write a function to truncate a string to a certain number of letters

function truncateString(num) {
    console.log(exampleString.slice(0,num)) 
}

truncateString(10)

// Square all the positive numbers of the array and return the output array

function squarePositiveNum(arr) {
    newArray = []
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) {
            newArray.push(Math.pow(arr[i], 2))
        }
    }
    console.log(newArray)
}

squarePositiveNum(exampleArray)

// Write a function to get the maximum value from a numbers array along with its index

function getMaxNum(arr) {
    const maxValue = Math.max(...arr)
    console.log(maxValue, arr.indexOf(Math.max(...arr)))
}

getMaxNum(exampleArray)

// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

function multiply (a,b) {
    console.log(a*b)
}

multiply(10,5)