let myForm = document.getElementById("inputForm");
let userName = document.getElementById("nameInput");
let outputFrenemy = document.getElementById("friendEnemy");
let color;
let count = Infinity;

myForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let name = userName.value;
  userName.value = "";
  frenemy(name);
});

//This function is used to determine if an entered name is on the frenemies list.
function frenemy(name) {
  //Used to separate the first name off from the last name (if entered) or any extra information entered. NOTE: split outputs an array.
  let fullName = name.trim().split(" ");
  firstName = fullName[0];

  //Standardizes the name by breaking off the first letter and remaining letters.
  let firstLetter = firstName[0];
  let restOfName = firstName.slice(1);
  let correctedFirstName = firstLetter.toUpperCase() + restOfName.toLowerCase();

  //If statement to determine if the first name AS ENTERED is correct and logs "Go, Away!"
  if (
    firstName === "Bowser" ||
    firstName === "Ganondorf" ||
    firstName === "Sephiroth" ||
    firstName === "Arthas" ||
    firstName === "Ridley" ||
    firstName === "GLaDOS"
  ) {
    outputFrenemy.textContent = `Go away ${correctedFirstName}!`;
    randomColors()
    outputFrenemy.style.backgroundColor = color;
    countDown(count);

    //Else if statement that checks the corrected first name to verify that odd capitalization was not used.
  } else if (
    correctedFirstName === "Bowser" ||
    correctedFirstName === "Ganondorf" ||
    correctedFirstName === "Sephiroth" ||
    correctedFirstName === "Arthas" ||
    correctedFirstName === "Ridley" ||
    correctedFirstName === "Glados"
  ) {
    outputFrenemy.textContent = `Go, away! Nice try cheating with capitalization ${correctedFirstName}.`;
    randomColors()
    outputFrenemy.style.backgroundColor = color;
    countDown(count);

    //Else statement for if neither the name as entered or corrected match the name list. Logs a greeting.
  } else {
    outputFrenemy.textContent = `Hello, ${correctedFirstName}!`;
  }
}

function randomColors() {
  let randomColorOne = Math.floor(Math.random() * 255);
  let randomColorTwo = Math.floor(Math.random() * 255);
  let randomColorThree = Math.floor(Math.random() * 255);
  color = `rgb(${randomColorOne}, ${randomColorTwo}, ${randomColorThree})`;
}

function countDown(count) {
  intervalId = setInterval(tick, 1000);
  function tick() {
    count = count - 1;
    randomColors();
    outputFrenemy.style.backgroundColor = color;
  }
}
