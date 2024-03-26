// app.js


// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCGQ0tYppWFJkuSxBhOpkH0xVDmX245Vdc",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "637908496727",
  appId: "2:637908496727:web:a4284b4c99e329d5",
  measurementId: "G-9VP01NDSXJ"
};


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