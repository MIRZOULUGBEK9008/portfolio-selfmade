// Modifiers
const modifiers = {
  dark: "dark",
  white: "oq",
  black: "qora"
}

const elLoader = document.querySelector(".lds-spinner-wrapper"),
theme = localStorage.getItem("theme", "dark"),
darkModeToggle = document.querySelector(".js-toggle");

// Loader
document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function() {
    elLoader.classList.add("lds-spinner-wrapper--opacity");
  }, 1000);
  setTimeout(function() {
    elLoader.classList.add("lds-spinner-wrapper--none");
  }, 1300);
  if (theme === "dark") {
    document.body.classList.add(modifiers.dark);
    darkModeToggle.textContent = modifiers.white;
  } else {
    document.body.classList.remove(modifiers.dark);
    darkModeToggle.textContent = modifiers.black;
  }
});

// Toggle
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle(modifiers.dark);
    if (document.body.classList.contains(modifiers.dark)) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    if (darkModeToggle.textContent === modifiers.black) {
      darkModeToggle.textContent = modifiers.white;
    } else {
      darkModeToggle.textContent = modifiers.black;
    }
  });