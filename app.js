const grid = document.querySelector("#grid");
const menu = document.querySelector("#menu");
const title = document.querySelector(".title");
const mainTitle = document.querySelector("#mainTitle");
const mainText = document.querySelector("#mainText");

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    window.location.reload();
});

const sobre = document.querySelector("#sobre");
sobre.addEventListener("click", () => {
    checkGrid();
    mainTitle.innerHTML = "Sobre mim";
    mainText.classList.add("p");
    mainText.innerHTML =
        "Olá! Me chamo Willian como você já sabe mas pode me chamar de Will.<br> Iniciei minha carreira dev em 2019 e desde então não parei mais, no decorrer desse tempo já desenvolvi muitos projetos com a minha linguagem preferida, JavaScript.";
});

const checkGrid = () => {
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
};

grid.addEventListener("click", () => {
    checkGrid();
});

title.addEventListener("click", () => {
    title.classList.add("dontTouch");
    setTimeout(() => {
        title.classList.remove("dontTouch");
    }, 1000);
});
