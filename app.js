const show = document.querySelectorAll(".show");
const pop = document.querySelectorAll(".pop");

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener("click", (e) => {
        show[i].classList.remove("display");
    })
}


// pop.addEventListener("click", () => {
//     pop.classList.remove("display")
//     show.classList.add("display")

// });=