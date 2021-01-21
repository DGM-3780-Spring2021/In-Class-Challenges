// Display all keys and values of a nested object

const displayNestedObject = () => {
    let nestedObj = {
        key1: 'val1',
        key2: 'val2',
        key3: {
            key4: 'val4',
            key5: 'val5',
        }
    }
    
    for (const [key, value] of Object.entries(nestedObj)) {
        if(typeof(value) === 'object') {
            console.log(`${key}:`);
            for (const [a, b] of Object.entries(value)) {
                console.log(`  ${a}: ${b}`);
              }
        } else {
            console.log(`${key}: ${value}`);
        }
      }
}

//displayNestedObject()


// Sort the given array of integers in ascending or descending order

const sortInt = () => {
    let array = [5, 3, 8, 101, 24]

    console.log('Ascending:', array.sort((x, y) => x - y))
    console.log('Descending:', array.sort((x, y) => y - x))
}

//sortInt()


// Write a function to get the maximum value from a numbers array along with its index

const maxValue = () => {
    let array = [4, 18, 420, 2, 69]
    let kingOfTheHill
    let kingIndex

    for (let i = 0; i < array.length; i++) {

        if (i > 0) {
            if (array[i] > kingOfTheHill) {
                kingOfTheHill = array[i]
                kingIndex = i
            }
        } else {
            kingOfTheHill = array[i]
            kingIndex = i
        }

      }

      console.log('The highest number is', kingOfTheHill, 'at position', kingIndex)

}

//maxValue()

// Write a function which can convert the time input given in 12 hours format to 24 hours format

const timeFormat = () => {
    let time = ['2:00PM', '5:00AM', '11:00PM', '12:00AM'];

    const timeShift = (changeTime) => {

        let timeStamp = changeTime.slice(-2)
        let newTimeArray = changeTime.slice(0, -2).split(':')
        let newTime

        if ((newTimeArray[0] !== '12' && timeStamp == 'PM') || (newTimeArray[0] == '12' && timeStamp == 'AM')) {
            let num = parseInt(newTimeArray[0], 10)
            num = num + 12

            newTime = num.toString();
        } else {
            newTime = newTimeArray[0]
        }

        console.log(newTime + ':00')
    }

    // Change time index to test different times
    timeShift(time[0])
    
}

//timeFormat()