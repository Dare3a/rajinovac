// SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function (event) {

    const button = document.querySelector('#back-to-top');

    button.addEventListener('click', function () {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY < 200) {
            button.style.opacity = "0";
        } else {
            button.style.opacity = "1";
        }
    });

});
// Toast za poslatu poruku u kontakt formi
// namesteno je na click zbog testa na lokalu u produkciji promeniti na submit
$(document).ready(function () {
    $("#form-contact, #form-contact-modal").submit(function () {
        $(".toast").toast({ delay: 1200 });
        $(".toast").toast("show");
        resetForm();
    });
});
// Reset kontakt forme i modal kontakt forme
function resetForm() {
    setTimeout(() => {
        $("#form-contact")[0].reset();
        $("#form-contact-modal")[0].reset();
    }, 1000);

    console.log("resetovao sam formu");
}