//Print numbers from 1 to 10 with delay of 1 second between each value being printed
const printCount = (a, b) => {
  for (let num = a; num <= b; num++) {
    setTimeout(() => {
      console.log(num);
    }, num * 1000);
  }
};

//Write a function which helps to achieve multiply(a)(b) and returns product of a and b
const multiply = (a) => {
  return (b) => a * b;
};

//Design a function which can keep receiving the arguments on each function call and returns the sum when no argument is passed
const sumThem = (arg) => {
  let sum = arg;
  return function summation(arg2) {
    if (arguments.length) {
      sum += arg2;
      return summation;
    }
    return sum;
  };
};

//Create a function which returns random hex color code
const giveRandomHex = () => {
  hexArray = [];
  for (let x = 1; x <= 3; x++) {
    let pair = Math.floor(Math.random() * Math.floor(256))
      .toString(16)
      .toUpperCase();
    if (pair.length < 2) {
      pair = `${pair}0`;
    }
    hexArray.push(pair);
  }
  return `#${hexArray.join("")}`;
};

console.log(giveRandomHex());
