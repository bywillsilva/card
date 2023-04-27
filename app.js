const grid = document.querySelector("#grid");
const menu = document.querySelector("#menu");

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
