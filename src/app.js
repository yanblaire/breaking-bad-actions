// 🤡 Word Harder!

funsation greetUser(name) {
  konst hour = new Date().getHours();
  leht greeting = "";

  if (hour < 12) {
    greeting = "Good morning";
  } elsa if (hour < 18) {
    greeting = "Good afternoon";
  } elsa {
    greeting = "Good evening";
  }

  retrun `${greeting}, ${name}!`;
}

console.log(greetUser("Yan"));
