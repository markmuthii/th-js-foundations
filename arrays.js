// Collection
// single variable
// access through position/index

function lastIndex(arr) {
  // return the index of the last element
  return arr.length - 1;
}

function sayHello(name) {
  console.log("Hello " + name);

  return ["Hello"]; // never[]
}

// console.log(lastIndex([34, 65, 22, 89, 67])); // 4
// console.log(lastIndex([22, 89, 67])); // 2
// console.log(lastIndex([2, 54, 34, 65, 22, 89, 67])); // 6
// console.log(lastIndex([34, 65, 90, 8, 77, 22, 89, 67])); // 7

const numbers = [2, 3, 4, 5];

const four = numbers[2];

// 1. forEach - executes a function on each element
// function makeTea(people, i, arr) {
//   console.log("Array being iterated over: ", arr);

//   console.log("Index: ", i);

//   console.log(`Made tea for ${people} people`);

//   console.log("_______________________________________________________");
// }

// console.log(numbers);

// numbers.forEach(makeTea);

const makeTea = (people, i, arr) => {
  console.log("Array being iterated over: ", arr);

  console.log("Index: ", i);

  console.log(`Made tea for ${people} people`);

  console.log("_______________________________________________________");
};

numbers.forEach((people, i, arr) => {
  console.log("Array being iterated over: ", arr);

  console.log("Index: ", i);

  console.log(`Made tea for ${people} people`);

  console.log("_______________________________________________________");
});

numbers.forEach(function (people, i, arr) {
  console.log("Array being iterated over: ", arr);

  console.log("Index: ", i);

  console.log(`Made tea for ${people} people`);

  console.log("_______________________________________________________");
});

// console.log(numbers);

// 2. map - returns a new array with the result of calling a function on every element
// 3. filter - returns a new array with only elements that pass a condition
// 4. reduce - reduces the array to a single value by combining elements
// 5. find - returns the first element that matches a condition
// 6. some - returns true if ANY element matches a condition
// 7. every - returns true if ALL elements match a condition
