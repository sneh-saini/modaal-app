const modaal = document.querySelector(".modaal");

const overlay = document.querySelector(".overlay");

const openModaal = () => {
    console.log("modaal is open");
    modaal.classList.add("active");
    overlay.classList.add("overlayactive");
};

const closeModaal = () => {
    modaal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};