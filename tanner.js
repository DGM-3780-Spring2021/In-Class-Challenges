//**Write a function to replace all the spaces of the string with underscores**

let string = "this is a long string"

function replaceSpace() {
    newString = string.split(" ").join('_')
    console.log(newString)
}
replaceSpace()


//**Write a function which can be used to deeply compare 2 nested objects**

const obj1 = {
    name: 'John',
    details: {
        x: 1,
        y: 2,
    },
};

const obj2 = {
    name: 'John',
    details: {
        y: 2,
        x: 1,
    },
};

function compareObjs() {
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
        return true
    } else {
        return false
    }
}
console.log(compareObjs())

//**Sort the given array of integers in ascending or descending order**

myArr = ["1","8","2","7","5","6","4","4","3"];

function sortArr(){
    console.log(myArr.sort())
}
sortArr()

//**Print numbers from 1 to 10 with delay of 1 second between each value being printed**

// function waiting(){
//     console.log("waiting 1 second");
// }

function printNums(){
    let newArr = ["1","2","3","4","5","6","7","8","9","10"]
    for(let i = 0; i <10; i++){
        setTimeout(function(){
            console.log(newArr[i])
            console.log("waiting 1 second")
        }, 1000)
    }
}
printNums()