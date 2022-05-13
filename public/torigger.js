const trigger = document.querySelectorAll(".torigger");
const meter = document.querySelectorAll(".meter");

window.addEventListener("load", (event) => {
  meter.forEach((el, index) => {
    const height = el.scrollHeight;
    el.style.setProperty("--max-height", height + "px");
  });
});

trigger.forEach((el, index) => {
  el.addEventListener("click", (event) => {
    event.target.classList.toggle("is-open");
    event.target.nextElementSibling.classList.toggle("is-open");
  });
});