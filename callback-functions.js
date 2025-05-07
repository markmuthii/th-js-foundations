function startMicrowave(seconds, alertMe) {
  console.log(`Starting microwave for ${seconds} seconds...`);

  setTimeout(alertMe, seconds * 1000);
}

function warmFood() {
  const alertWarm = () => {
    console.log("Your food is warm");
  };

  // Other processes here

  // startMicrowave(5, alertWarm);
  startMicrowave(5, () => {
    console.log("Your food is warm");
  });
}

function defrostMeat() {
  const alertDefrost = () => {
    console.log("Your meat is defrosted");
  };

  // Other processes here

  startMicrowave(10, alertDefrost);
}

// TODO: Come back and implement Asynchronous
// warmFood();
defrostMeat();
