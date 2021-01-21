// Write a function to reverse a string
const reverseString = (string) => {
    console.log(string.split('').reverse().join(''))
}

// Create a function which receives a function as argument and executes it after 2 seconds
const execute2seconds = (func) => {
    setTimeout(func, 3000)
}
const sayHi = () => {
    console.log('hi!')
}

// Write a program to polyfill map functionality of the Array(Rewrite the .map method)
const customMap = (arr, mod) => {
    let resultsArray = []
    for (let i = 0; i < arr.length; i++) {
        resultsArray.push(mod(arr[i]))
    }
    console.log(resultsArray)
}

const customArray = [3,5,1,9,3,4]

customMap(customArray,(item) => {
    return item + 1
})

// Write a program to polyfill filter functionality of the Array (Rewrite the .filter method)
const customFilter = (arr, mod) => {
    let resultsArray = []
    for (let i = 0; i < arr.length; i++) {
        console.log('hey?')
        if (mod(arr[i])) resultsArray.push(arr[i])
    }
    console.log(resultsArray)
}

const customArray2 = [3,5,1,9,3,4]

customFilter(customArray2, (item) => {
    return item < 4
})

reverseString('Random string')
execute2seconds(sayHi)
