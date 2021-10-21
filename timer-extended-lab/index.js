let count = 120;
let newCount;
let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let add = document.getElementById("add");
console.log(timer);

start.addEventListener("click", (evt) => {
  if (timer.textContent === "Hit Start") {
    countDownFrom(count);
  } else {
    countDownFrom(newCount + 1);
  }
});

stop.addEventListener("click", (evt) => {
  clearInterval(intervalId);
  process.exit();
});

reset.addEventListener("click", (evt) => {
  clearInterval(intervalId);
  countDownFrom(120);
});

//creating a setInterval countdown function
function countDownFrom(count) {
  intervalId = setInterval(tick, 1000);
  function tick() {
    //creating new variables for minutes and seconds
    minutes = Math.floor(count / 60);
    seconds = count % 60;
    //if statement to add left padded zeros to single digit values
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    timer.textContent = minutes + " : " + seconds;
    //document.getElementById("timer").innerHTML = minutes + " : " + seconds;
    //decrementing the count and creating newCount for start stop functionality
    count = count - 1;
    newCount = count - 1;
    //if statement for when count hits zero
    if (count <= 0) {
      timer.textContent = "Times Up!";
      //document.getElementById("timer").innerHTML = "Times Up!";
      clearInterval(intervalId);
    }
  }
}
