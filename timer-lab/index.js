let count = 75;
let timer = document.getElementById("timer");

//creating an event listener for the loading of the page
window.addEventListener("load", (evt) => {
  countDownFrom(count);
});

//creating a setInterval countdown function
function countDownFrom(count) {
  let intervalId = setInterval(tick, 1000);
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
    //decrementing the count
    count = count - 1;
    //if statement for when count hits zero
    if (count <= 0) {
      timer.textContent = "Times Up!";
      //document.getElementById("timer").innerHTML = "Times Up!";
      clearInterval(intervalId);
    }
  }
}
