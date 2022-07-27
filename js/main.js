const toggle = document.querySelector(".toggle"),
loader = document.querySelector(".lds-spinner-wrapper");

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function() {
    loader.classList.add("lds-spinner-wrapper--opacity");
  }, 1000);
  setTimeout(function() {
    loader.classList.add("lds-spinner-wrapper--none");
  }, 1300);
});