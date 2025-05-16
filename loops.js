// Condition

// Initialization

// Increment

// i++
// ++i

for (let i = 1; i <= 10; i++) {
  console.log(i); // 1 2 3 ... 10
}

// 1. Use a loop to log every element in an array

const numbers = [2, 5, 2, 8];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 2. Use a loop to print only the even numbers in the array // 2, 6, 8, 10
for (let i = 0; i < numbers.length; i++) {
  // Get each number in the array
  const num = numbers[i];

  // Check whether the number is even
  if (num % 2 === 0) {
    // If it is, log it
    console.log(num);
  }
}

// 2 10

// const numbers = [2, 5, 10, 45];

// 3. Use a loop to calculate the sum of the numbers in the array

// Start the sum at zero
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  // Get each number in the array
  const num = numbers[i];

  // Add it to the previous sum
  // sum += num;
  sum = num + sum;
}

// Log the sum
console.log(sum);

// 4. Use a loop to calculate the sum of only the even numbers

// Start the sum at 0
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  // Get each number in the array
  const num = numbers[i];

  // Check if the number is even
  if (num % 2 === 0) {
    // If it is, add it to the sum
    sum = sum + num;
  }
}

// Log the sum
console.log(sum);

// 5. Use a loop to show the sum of the even numbers and the sum of the odd numbers
// Sum of even: 26
// Sum of odd: 50

var sumEven = 0;
var sumOdd = 0;

for (let i = 0; i < numbers.length; i++) {
  // Get each number in the array
  const num = numbers[i];

  // Check if the number is even
  if (num % 2 === 0) {
    // If it is, add it to the sumEven
    sumEven = sumEven + num;
  } else {
    // If it is not, add it to the sumOdd
    sumOdd = sumOdd + num;
  }
}

// Log the sumEven
console.log(sumEven);
console.log(sumOdd);

// const numbers = [2, 5, 10, 45];

// 6. Use a loop to calculate the sum of the factorials of all the numbers in the array

function factorial(num) {
  // Start a result at 1
  let result = 1;
  // Get each number from num down to 1
  for (; num > 0; num--) {
    // Multiply the number with the previous result
    result = result * num;
    // result *= num
  }

  return result;
}

// Start the sum at 0
var sum = 0;

// const numbers = [2, 5, 2, 8];

for (let i = 0; i < numbers.length; i++) {
  // Get each number in the array
  const num = numbers[i];

  // Get the factorial of the number
  const numFactorial = factorial(num);

  // Add that factorial to the sum
  sum = sum + numFactorial;
}

console.log(sum);

// 7. Given an array of numbers, use a loop to determine how many even and odd numbers are in the array
// eg const numArr = [2, 5, 8, 7, 10]
// Even: 3
// Odd: 2
