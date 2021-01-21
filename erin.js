//Write a function to reverse a string
const str = 'This is a string.';
function reverseString(str) {
    let newString = str.split("");
    newString.reverse();
    let joinedString = newString.join("");
        console.log(joinedString);

    return joinedString;
}
// reverseString(str);

//Design a function which can recieve variable number of arguments in parameters and prints them** 

function printArguments(...params){
    console.log(...params);
}

// printArguments(str, ' another argument', ' and another argument');


//**Write a function to replace all the spaces of the string with underscores** 
const sentence = 'This is a sentence.'
function replaceSpaces(str){
    const regex = /\s/g;
    let newString = str.replace(regex, "_");
    return newString;
}
replaceSpaces(sentence);


//**Write a function which executes another function recieved as an argument**
const numberArray = [1,2,3];

function firstFunc(arr){
    const words = ["Foo", "Bar"];
    const concatArray = arr.concat(words);
    return concatArray;
}

function secondFunc(func){
    const moreWords = ["Hello", "World"];
    const otherArray = func(numberArray);
    const finalArray = otherArray.concat(moreWords);

    console.log('final array----->', finalArray);
}

secondFunc(firstFunc);