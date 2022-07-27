// Modifiers
const modifiers = {
  dark: "dark",
  white: "oq",
  black: "qora",
  scroll: "site-header--scroll",
  img: "site-header__img--none",
  link: "site-header__link-wrapper--none"
}

const elLoader = document.querySelector(".lds-spinner-wrapper"),
theme = localStorage.getItem("theme", "dark"),
darkModeToggle = document.querySelector(".js-toggle"),
siteHeader = document.querySelector(".site-header"),
siteHeaderImg = document.querySelector(".site-header__img"),
siteHeaderLinkWrapper = document.querySelector(".site-header__link-wrapper");

// Add shadow
window.addEventListener("scroll", function() {
  let element = window.scrollY;
  if (element > 0) {
    siteHeader.classList.add(modifiers.scroll);
    siteHeaderImg.classList.add(modifiers.img);
    siteHeaderLinkWrapper.classList.add(modifiers.link);
  } else {
    siteHeader.classList.remove(modifiers.scroll);
    siteHeaderImg.classList.remove(modifiers.img);
    siteHeaderLinkWrapper.classList.remove(modifiers.link);
  }
});

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
