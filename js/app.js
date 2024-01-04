// app.js

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervals = [];

document.querySelectorAll(".screen").forEach((screen, index) => {
  const name = screen.querySelector(".name");
  let interval = null;

  screen.addEventListener("mouseenter", () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      name.innerText = name.dataset.value
        .split("")
        .map((letter, i) => {
          if (i < iteration) {
            return name.dataset.value[i];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= name.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    intervals[index] = interval;
  });

  screen.addEventListener("mouseleave", () => {
    clearInterval(intervals[index]);
    name.innerText = name.dataset.value; // Reset the text to its original value
  });
});

// Add this function to clear intervals when needed
function clearIntervals() {
  intervals.forEach((interval) => {
    clearInterval(interval);
  });
}