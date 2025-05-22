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
// Get the input from the form
// Convert the input into a number
// Call the checkAccess function and pass the input to it
// Show the output on the page
