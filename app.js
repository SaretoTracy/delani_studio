const show = document.querySelector(".show");
const pop = document.querySelector("#pop");

show.addEventListener("click", () => {

    pop.classList.add("display")
    show.classList.remove("display")

});

pop.addEventListener("click", () => {
    pop.classList.remove("display")
    show.classList.add("display")

});