// Reversing a string
let testString="hello world"

function reverse(string){
    console.log(string.split("").reverse().join(""))
}

reverse(testString)

// comparing two dates
const date1 = new Date('2020-06-01');
const date2 = new Date('2021-06-01');

function compareDates (d1, d2) {
    // time different in mms
    let timeDifference = Math.abs(d2 - d1)
    // ms per day
    let dayDifference = Math.ceil(timeDifference / ( 1000 * 60 * 60 * 24))
    console.log("difference in days: " + dayDifference)
  }

compareDates(date1, date2)

  // Calling a function inside another function
function function2() {
    console.log("function 2 has been called")
}

function function1() {
  function2()
}

function1()

// Square all the numbers in an array 
let numArray = [1,2,3,4]

let squared = numArray.map(x => x ** 2)
console.log(squared)


// sorting array of numbers in descending order
 let sorted = numArray.sort((a, b) => b - a)
 console.log(sorted)


 // function that accepts n parameters and prints them
 function foo() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
foo(1,2,3,4,5)