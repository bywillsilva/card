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
        "Olá! Me chamo Willian como você já sabe mas pode me chamar de Will.<br> Iniciei minha carreira dev em 2019 e desde então não parei mais. No decorrer desse tempo já desenvolvi muitos projetos com a minha linguagem preferida, JavaScript.";
});

const skills = document.querySelector("#skills");
skills.addEventListener("click", () => {
    checkGrid();
    mainTitle.innerHTML = "Skills";
    mainText.classList.add("p");
    mainText.innerHTML = "Tenho muito conhecimento no desenvolvimento com JavaScript, Node, React, Html e Css, além de outras tecnologias que tenho estudado para o desenvolvimento fullstack.";
});

const contato = document.querySelector("#contato");
contato.addEventListener("click", () => {
    checkGrid();
    mainTitle.innerHTML = "Contato";
    mainText.classList.add("p");
    mainText.innerHTML = "willian.raniere@icloud.com <br> @bywill_silva <br> (84) 9 8604-6531";
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
