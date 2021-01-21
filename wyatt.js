let string = 'Random String to be replaced'
let arrayRandom = ['This is great! I love JS!!!']

function replaceSpacesWith_(text) {
    return text.split(' ').join('_')
}

replaceSpacesWith_(string)


function chunksChop(string, size) {
    const chunked_arr = []
    let copy = [...string]
    const indexingNum = Math.ceil(copy.length / size)
    for (let i = 0; i < indexingNum; i++) {
        chunked_arr.push(copy.splice(0, size))
    }
    let completed = []
    chunked_arr.forEach(arr => {
        let newString = arr.join('')
        completed.push(newString)
    })
    return completed
}

chunksChop(string, 4)



function printArgs(...args) {
    console.log(args)
}

printArgs(3, 6, 7, 5, 4)


function callIfParamatersMatch(one, two, three) {
    console.log(callIfParamatersMatch.arguments)
    if (callIfParamatersMatch.arguments.length === 3) {
        console.log('This function is running properly')
    } else {
        console.log('Please try again')
    }
}

callIfParamatersMatch(1, 2, 3)