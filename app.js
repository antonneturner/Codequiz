//  Document variables

document.addEventListener("DOMContentLoaded", () => {
  const timeLeftDisplay = document.querySelector("#time-left");
  const startBtn = document.querySelector("#start-button");
  let timeLeft = 10;

  //   Function countdown

  function countDown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }
  // start button

  startBtn.addEventListener("click", countDown);
});
