console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}//END OF FUNCTION
console.log(helloName('Jake'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}//END OF FUNCTION

console.log('Adding 11 and 13.', addNumbers(11,13));


// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree ){
  return numOne * numTwo * numThree;
}//END OF FUNCTION

console.log('Multiplying 7, 8, and 9.', multiplyThree(7,8,9));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}//END OF FUNCTION

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast( array ) {
  if (array.length > 0){
    return array.pop();
  }
  else{
    return 'undefined';
  }
}
let sampleArray = [1, 2, 3, 4,];
let blankArray = [];
console.log(`sampleArray is: ${sampleArray}`);
console.log('The final number in sampleArray is (should return 4):', getLast(sampleArray));
console.log(`blankArray is: ${blankArray}`);
console.log('The final number in blankArray is (should return undefined):', getLast(blankArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let primaryColors = ['red', 'blue', 'yellow'];

function findValue( value, array ){
  for (let i=0; i<array.length; i++){
    if(value===array[i]){
      return true;
    }
  }
  return false;
}
console.log('Looking for red, should return true.', findValue('red', primaryColors))
console.log('Looking for green, should return false.', findValue('green', primaryColors))
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string){
  let uno = string.charAt(0);
    if(letter===uno){
      return true;
    }
    else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// TODO: loop to add items
function sumAll(array) {
  let sum = 0
  for (let i=0; i<array.length; i++){
    (sum += array[i]);
  }
  return sum;
}
let someNumbers = [1, 2, 3];
console.log('Adding 1, 2, and 3.', sumAll(someNumbers));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function makePositive(array){
  let newArray = []
  for (let i=0; i<array.length; i++){
    if (array[i]>0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}//END OF FUNCTION
//Created a function
let randomNumbers = [(-3), 3, (-6), 6, (-9), 9]
console.log(`Array randomNumbers is: ${randomNumbers}`);
console.log('Creating a new array of only the positive numbers from randomNumbers:', makePositive(randomNumbers));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Create a function that takes an array of numbers and returns an inverted array.
//Examples: invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
//          invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

function invertArray(array){
  let oppositeArray = []
  for(i=0; i<array.length; i++){
    let num = -(array[i]);
      oppositeArray.push(num)
    }
  return oppositeArray;
}//END OF FUNCTION
let testArray = [7, 4, 7];
console.log(`testArray is: ${testArray}`);
console.log('Inverting the numbers in testArray:', invertArray(testArray));
let flipThis = [-4, 8, 9, 8, -1];
console.log(`flipThis is: ${flipThis}`);
console.log('Inverting the numbers in flipThis:', invertArray(flipThis));
