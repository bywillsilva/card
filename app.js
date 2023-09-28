const title = document.querySelector(".title");

title.addEventListener("click", () => {
    title.classList.add("dontTouch");
    setTimeout(() => {
        title.classList.remove("dontTouch");
    }, 1000);
});
