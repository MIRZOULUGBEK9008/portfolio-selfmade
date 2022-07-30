// Modifiers
const modifiers = {
  dark: "dark",
  white: "oq",
  black: "qora",
  scroll: "site-header--scroll",
  content: "site-header__img-content-wrapper--none",
  toggler: "toggler--block",
  scrollTop: "scroll-site-top--block",
  logo: "logo--block"
}

const elLoader = document.querySelector(".lds-spinner-wrapper"),
theme = localStorage.getItem("theme", "dark"),
elDarkModeToggle = document.querySelector(".js-toggle"),
elSiteHeader = document.querySelector(".site-header"),
elScrollTop = document.querySelector(".js-scroll"),
elLogo = document.querySelector(".logo"),
elSiteHeaderContentWrapper = document.querySelector(".site-header__img-content-wrapper");

// Loader
document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function() {
    elLoader.classList.add("lds-spinner-wrapper--opacity");
  }, 1000);
  setTimeout(function() {
    elLoader.classList.add("lds-spinner-wrapper--none");
  }, 1500);
  if (theme === "dark") {
    document.body.classList.add(modifiers.dark);
    elDarkModeToggle.textContent = modifiers.white;
  } else {
    document.body.classList.remove(modifiers.dark);
    elDarkModeToggle.textContent = modifiers.black;
  }
});

// Add shadow
window.addEventListener("scroll", function() {
  let element = window.scrollY;
  if (element > 0) {
    elSiteHeader.classList.add(modifiers.scroll);
    elSiteHeaderContentWrapper.classList.add(modifiers.content);
    elLogo.classList.add(modifiers.logo);
    elScrollTop.classList.add(modifiers.scrollTop);
    elDarkModeToggle.classList.add(modifiers.toggler);
  } else {
    elSiteHeader.classList.remove(modifiers.scroll);
    elSiteHeaderContentWrapper.classList.remove(modifiers.content);
    elLogo.classList.remove(modifiers.logo);
    elScrollTop.classList.remove(modifiers.scrollTop);
    elDarkModeToggle.classList.remove(modifiers.toggler);
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
