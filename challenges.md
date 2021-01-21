# Code Challenges

**Write a function which accepts two valid dates and returns the difference between them as number of days**

**Write a function to reverse a string**

**Write a function to replace all the spaces of the string with underscores**

**Write a function which can convert the time input given in 12 hours format to 24 hours format**

**Write a function to truncate a string to a certain number of letters**

```javascript
// Example
truncateString(“JavaScript”, 7)             // “Java…”
truncateString(“JS is fun”, 12)             // “JS is fun”
truncateString(“JS is funny”, 12)           // “JS is fun…”
```

**Write a function to chop a string into chunks of a given length and return it as array**

```javascript
// Example
stringChop(‘JavaScript’);               // [“JavaScript”]
stringChop(‘JavaScript’, 2);            // [“Ja”, “va”, “Sc”, “ri”, “pt”]
stringChop(‘JavaScript’, 3);            // [“Jav”, “aSc”, “rip”, “t”]
````

**Create a function which returns random hex color code**
* The color code is popularly represented in hexadecimal format for RGB colors
* The minimum value for the color is ‘#000000' and maximum is '#FFFFFF’

**Write a function which can be used to deeply compare 2 nested objects**

```javascript
// Example
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

deepEqual(obj1, obj2);              // true
```

**Create an object and make it behave like an array which allows push and pop operations on items with a .length property**

**Display all the keys and values of a nested object**
* Should display nested objects key values pairs
* Recursion can be used, but isn't required

**Design a function which can keep receiving the arguments on each function call and returns the sum when no argument is passed**
* The function can be designed to return another function which maintains the closure over the previous sum value
* The check for breaking condition can be added using the argument check for undefined
* 3rd solution uses the property on function to store the total which will be updated on each call hence the same function can be returned

```javascript
// Example
sum(2)(4)(6)(1)();          // 13
sum(2)(4)();                // 6
sum(3)();                   // 3
```

**Create a range function which returns an array for the provided inputs as start and end**
```javascript
// Example
range(3, 6)     // [3, 4, 5, 6]
range(3)(5)     // [3, 4, 5]
range(3)(0)     // []
```
* Range functionality can be obtained by returning the an array from start to end both inclusive
* In case if 2nd argument is not passed, function will return another function which calls itself with once both the values are obtained

**Write a function which helps to achieve multiply(a)(b) and returns product of a and b**
```javascript
// Example
multiply(2)(4);                 // 8
multiply(5)(3);                 //15
```

**Design a Calculator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface**
```javascript
// Example
const calc12And5 = Calculator(12, 5);
calc12And5.sum();                       // 17
calc12And5.difference();                // 7
calc12And5.product();                   // 60
calc12And5.dividend();                  // 2
```

**Design a function which can receive variable number of arguments in parameters and prints them**

**Write a function which executes only if the number of arguments match the number of parameters the function is expecting**

**Write a function which executes another function received as an argument**
* Functions can be passed as arguments to another functions
* Passing the function as argument will pass its reference hence no parenthesis

**Sort the given array of integers in ascending or descending order**

* `sort` method sorts the elements of an array in place and returns the sorted array
* It receives a function as an argument, which is used for comparison

**Square all the positive numbers of the array and return the output array**

**Write a function to get the maximum value from a numbers array along with its index**

**Write a program to polyfill filter functionality of the Array (Rewrite the .filter method)**
* `filter` iterates over the all values of array and passes value, index and array (itself) as the arguments
* Function returns a new array which filtering the values of the original array

**Write a program to polyfill map functionality of the Array(Rewrite the .map method)**
* map iterates over the all values of array and passes value, index and array (itself) as the arguments
* Function returns a new array which is same as the length of the original array

**Write a program to polyfill reduce functionality of the Array(Rewrite the .reduce method)**
* reduce iterates over the all values of array and passes value, index and array (itself) as the arguments
* reduce accepts an optional initial value which when not provided can be skipped
* Function returns a single value after all the iteration

**Create a function which receives a function as argument and executes it after 2 seconds**

**Print numbers from 1 to 10 with delay of 1 second between each value being printed**
