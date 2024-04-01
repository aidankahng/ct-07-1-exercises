// Exercise 1:
// Declare a variable, name, and assign it a string value representing your name.
// Declare another variable, greeting, and assign it a string value like "Hello, ".
// Concatenate greeting and name together and store it in a new variable called welcomeMessage.
// Display welcomeMessage using console.log().

const myName = "Joshua";
const greeting = "Hello, ";
const welcomeMessage = greeting + myName + ".";
console.log(welcomeMessage);


// Exercise 2
// Declare a variable, temperatureC, and assign it a numeric value representing the current temperature in Celsius.
// Declare a second variable, temperatureF, that is the fahrenheit conversion of temperateC
// Write an if statement to check if the temperature is greater than 80 degrees fahrenheit.
// If it is, display a message saying "It's a hot day!" using console.log(). Otherwise, display "It's not too hot today."

let temperatureC = 22 + Math.random() * 10;
let temperatureF = (temperatureC * 9 / 5) + 32;
console.log(Math.round(temperatureC), Math.round(temperatureF));
if (temperatureF > 80) {
    console.log("It's a hot day!") ;
} else {console.log("It's not too hot today.")}
 


// Exercise 3
// Declare a variable, count, and assign it an initial value of 0.
// Use a while loop to display the value of count by 5s in the console until it reaches 50.
// Increment the value of count by 5 within the loop.

let count = 0
while (count < 50) {
    console.log(count += 5);
}

// From CodeWars:
// Problem 1: Even or Odd
function evenOrOdd(number) {
    if (number % 2) {
      return "Odd";
    } else { return "Even"}
  }

// Problem 2: Count the vowels
function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    let counter = 0;
    for (const char of str) {
        if (vowels.includes(char)){
            counter++;
        }
    }
    return counter;
}

// Problem 3: Remove all vowels
function disemvowel(str) {
    const vowels = 'aeiouAEIOU';
    let retString = '';
    for (const char of str) {
      if (!vowels.includes(char)) {
        retString += char;
      }
    }
    return retString;
  }

// Problem 4: Square Every Digit
// Taking advantage of loose typing to square characters
function squareDigits(num){
    let strNum = num.toString();
    let strRet = '';
    for (const char of strNum) {
      let squared = char ** 2
      strRet += squared
    }
    return parseInt(strRet)
  }

// Problem 5: List Filtering
// Return the list with all strings removed
function filter_list(l) {
    let newList = [];
    for (let element of l) {
      if (typeof element != 'string') {
        newList.push(element)
      }
    }
    return newList
  }

