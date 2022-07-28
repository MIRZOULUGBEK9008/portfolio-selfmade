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
elDarkModeToggle = document.querySelector(".js-toggle"),
elSiteHeader = document.querySelector(".site-header"),
elScrollTop = document.querySelector(".js-scroll"),
elSiteHeaderImg = document.querySelector(".site-header__img"),
elSiteHeaderLinkWrapper = document.querySelector(".site-header__link-wrapper");

// Add shadow
window.addEventListener("scroll", function() {
  let element = window.scrollY;
  if (element > 0) {
    elSiteHeader.classList.add(modifiers.scroll);
    elSiteHeaderImg.classList.add(modifiers.img);
    elSiteHeaderLinkWrapper.classList.add(modifiers.link);
    elScrollTop.classList.add("scroll-site-top--block");
  } else {
    elSiteHeader.classList.remove(modifiers.scroll);
    elSiteHeaderImg.classList.remove(modifiers.img);
    elSiteHeaderLinkWrapper.classList.remove(modifiers.link);
    elScrollTop.classList.remove("scroll-site-top--block");
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
    elDarkModeToggle.textContent = modifiers.white;
  } else {
    document.body.classList.remove(modifiers.dark);
    elDarkModeToggle.textContent = modifiers.black;
  }
});

// Toggle
elDarkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle(modifiers.dark);
  if (document.body.classList.contains(modifiers.dark)) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  if (elDarkModeToggle.textContent === modifiers.black) {
    elDarkModeToggle.textContent = modifiers.white;
  } else {
    elDarkModeToggle.textContent = modifiers.black;
  }
});
