document.addEventListener("DOMContentLoaded", function () {
    let divs = document.querySelectorAll("main > div");

    function changeBg(event) {
        for (let div of divs) {
            div.style.backgroundColor = "darkgray";
        }

        let parentDiv = event.target.closest("div"); // Находим родительский div
        if (parentDiv) {
            parentDiv.style.backgroundColor = parentDiv.classList; // Берем первый класс как цвет
        }
    }

    for (let div of divs) {
        let button = div.querySelector("button");
        button.addEventListener("click", changeBg);
    }
});

