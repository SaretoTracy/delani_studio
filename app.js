const show = document.querySelector(".show");
const pop = document.querySelector("#pop");

show.addEventListener("click", () => {
    show.classList.add("display")
    pop.classList.remove("display")

});

pop.addEventListener("click", () => {
    pop.classList.add("display")
    show.classList.remove("display")

});