// Strings
let str = "This is a string";
let str2 = "This is a string";
let str3 = `This is a string`;

// Boolean
let bool = true;
let bool2 = false;

// Number
let num = 77;
let num2 = -77;
let num3 = 77.8998923;

// Arrays
let arr = [
  77,
  "a string",
  false,
  ["another string", "hello", true, "world"],
  {
    firstName: "John",
    lastName: "Wick",
    spouse: {
      firstName: "Jane",
      lastName: "Wick",
    },
    pets: [
      {
        name: "Puss N Boots",
        age: 3,
      },
      {
        name: "Donkey",
        age: 6,
      },
      {
        name: "Shrek",
        age: 20,
      },
    ],
  },
  undefined,
  null,
];

console.log(arr[1]);

console.log(arr[3][3]);
console.log(arr[4].spouse.firstName);

// Objects
let student = {
  age: 20,
  dob: 2005,
  name: "Diana",
  course: "Software Development",
  goToClass: function () {
    return `${this.name} is going to class`;
  },
};

let student2 = {
  name: "Maxwell",
  age: 17,
  dob: 2007,
  course: "Software Development",
  goToClass: function () {
    return `${this.name} is going to class`;
  },
};

console.log(student2.name); // Dot notation to access the value of a property

let person = {
  name: "Alice",
  age: 20,
};

console.log(person.name);
console.log(person["age"]);

// undefined

// null

// BigInt

// Symbol
