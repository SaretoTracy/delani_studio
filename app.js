const show = document.querySelectorAll(".show");
const pop = document.querySelectorAll(".pop");

for (let i = 0; i < show.length || i < pop.length; i++) {
    show[i].addEventListener("click", (e) => {
        show[i].classList.remove("display");
        pop[i].classList.add("display")
    })
    pop[i].addEventListener("click", (e) => {
        pop[i].classList.remove("display");
        show[i].classList.add("display")
    })

};

$(document).ready(() => {
    $("#submit").click((e) => {
        if ($("#email").val() === "" || $("#name").val() === "") {
            e.preventDefault();
            alert(`enter your Name and email address`);
        } else alert(`${$("#name").val()} we have received your message. Thank you for reaching out to us. `);
        $("form").trigger("reset");
    });
})