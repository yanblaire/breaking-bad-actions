// This function greets a user based on time of day

function greetUser(name) {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return `${greeting}, ${name}!`;
}

console.log(greetUser("Yan"));
