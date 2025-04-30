// Function declaration for making tea
function makeTea() {
  console.log("Process started...");
  // Steps to make tea:
  // - Boil water
  // - Add milk
  // - Continue boiling at low heat
  // - Seave (filter the tea)
  // - Serve the tea
  console.log(`Made tea for ${people} people`); // This line uses the variable 'people', which is declared later in the code.
  // Note: This will cause an issue because 'people' is undefined at this point due to hoisting.
}

// Function expression for making lunch
const makeLunch = (people) => {
  // This function takes a parameter 'people' and logs a message indicating lunch was made for that many people.
  console.log(`Made lunch for ${people} people`);
};

// - At 8AM:
makeTea(2); // This line calls the makeTea function with an argument of 2.
// However, the makeTea function does not accept any parameters, so this argument is ignored.
// Additionally, the 'people' variable is not yet defined, and so the value will be undefined inside the function.

var people = 3; // Variable 'people' is declared and initialized with the value 3.
// Note: 'var' declarations are hoisted to the top of their scope, but their initialization is not.
// This means 'people' is undefined until this line is executed.

console.log(people); // Logs the value of 'people', which is now 3.

makeTea(2); // Calls the makeTea function again. This time, people has been assigned the value of 3.

makeLunch(5); // Calls the makeLunch function with an argument of 5.
// This works correctly because the 'makeLunch' function accepts a parameter and uses it.

console.log(people); // Logs the value of 'people' again, which is still 3.

// The following lines are commented out, but they demonstrate additional calls to the makeTea function at different times of the day:

// - At 4PM:
// makeTea(1); // Would call the makeTea function with an argument of 1.

// - At 9PM:
// makeTea(1); // Would call the makeTea function with an argument of 1.

// console.log("Day done. Haujainama"); // Logs a message indicating the day is done.
