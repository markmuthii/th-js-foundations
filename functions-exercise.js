// 1. Create a simple function that logs "Hello, World!" to the console.
//    Goal: Understand how to define and call a function.
function logHello() {
  console.log("Hello, World!");
}

const logHelloWorld = () => {
  console.log("Hello, World!");
};

// logHello();

// 2. Write a function greet(name) that takes a name as a parameter and logs "Hello, [name]!".
//    Goal: Learn how to use parameters and string interpolation.
function greet(name) {
  console.log(`Hello, ${name}!`); // interpolation

  // console.log("Hello, " + name + "!"); // concatenation
}

greet("John Wick");

// 3. Write a function add(a, b) that returns the sum of two numbers.
//    Goal: Practice return statements and basic arithmetic.
function addAgain(a, b) {
  const addition = a + b;

  return addition;
}

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 7));
console.log(add(4, 4));

// 4. Write a function isEven(n) that returns true if a number is even, and false otherwise.
//    Goal: Practice conditionals within functions.
function isEven(n) {
  // return n % 2 === 0; // Simplification of the below process
  // Take the number, divide it by 2, get the remainder
  const remainder = n % 2;

  if (remainder == 0) {
    // If the remainder is 0, it is even
    console.log("Number is even");

    // If the number is even, return true
    return true;
  } else {
    // If the remainder not 0, it is not even
    console.log("Number is not even");

    // If the number is not even, return false
    return false;
  }
}

// 5. Create a function squareArray(arr) that takes an array of numbers and returns a new array with each number squared.
//    Goal: Use loops or array methods inside functions.

// 6. Write a function factorial(n) that returns the factorial of a number.
//    Goal: Use recursion or loops in function logic.

// 7. Write a function reverseString(str) that returns the reversed version of the input string.
//    Goal: Practice string manipulation inside functions.

// 8. Write a function countVowels(str) that returns the number of vowels in a given string.
//    Goal: Combine iteration and conditionals with string handling.

// 9. Create a function isPalindrome(str) that checks if a string is a palindrome.
//    Goal: Work with string comparison and logic.

// 10. Write a higher-order function applyOperation(a, b, operation) where operation is a function like add, subtract, etc.
//     Goal: Understand functions as first-class citizens and function arguments.
