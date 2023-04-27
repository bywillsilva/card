const grid = document.querySelector("#grid");
const menu = document.querySelector("#menu");
const title = document.querySelector("#title");

grid.addEventListener("click", () => {
    let onDisplay = window.getComputedStyle(menu).display;
    if (onDisplay == "none") {
        menu.classList.remove("none");
        menu.classList.add("flex-column");
        menu.classList.add("center");
        grid.src = "./icons/close-icon.svg";
    } else {
        menu.classList.add("none");
        menu.classList.remove("flex-column");
        menu.classList.remove("center");
        grid.src = "./icons/grid-icon.svg";
    }
});

title.addEventListener("click", () => {
    title.classList.add("dontTouch");
    setTimeout(() => {
        title.classList.remove("dontTouch");
    }, 1000);
});