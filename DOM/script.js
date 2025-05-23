function checkAccess(birthYear) {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);

  const age = currentYear - birthYear;

  if (age < 18) {
    return "Access not Allowed";
  } else if (age >= 18 && age <= 21) {
    return "Open Bar Access";
  } else {
    return "Open Bar and Strip Club Access";
  }
}

// Check when the form is submitted / when the button is clicked

// Get the form
const form = document.getElementById("form");
// console.log({ form });

// Two ways to add an event:
// 1. Using the addEventListener method

const formSubmissionHandler = (event) => {
  event.preventDefault();
  // Get the input from the form
  let year = document.getElementById("year").value;

  // Convert the input into a number
  year = parseInt(year);

  // Call the checkAccess function and pass the input to it
  const access = checkAccess(year);

  // Show the output on the page
};

form.addEventListener("submit", formSubmissionHandler);

// 2. Using the onsubmit property
