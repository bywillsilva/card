const grid = document.querySelector("#grid");
const menu = document.querySelector("#menu");
const title = document.querySelector(".title");
const mainTitle = document.querySelector("#mainTitle");
const mainText = document.querySelector("#mainText");

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    checkGrid();
    mainTitle.innerHTML = "Willian Raniere";
    mainText.classList.add("p");
    mainText.innerHTML =
        "Front-end Developer";
});

const sobre = document.querySelector("#sobre");
sobre.addEventListener("click", () => {
    checkGrid();
    mainTitle.innerHTML = "Sobre mim";
    mainText.classList.add("p");
    mainText.innerHTML =
        "Olá! Pode me chamar de Will. Iniciei minha carreira dev em 2019 e desde então não parei mais. No decorrer desse tempo já desenvolvi muitos projetos com a minha linguagem preferida, JavaScript.";
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
    mainText.innerHTML = "<ul><li><a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank'>willian.raniere@icloud.com</a></li><li><a href='https://instagram.com/bywill_silva' target='_blank'>@bywill_silva</a></li><li><a href='https://wa.me/+5584986046531' target='_blank'>(84) 9 8604-6531</a></li></ul>";
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
