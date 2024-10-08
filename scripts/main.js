let dropDownTab = document.querySelector(".dropdown");
let dropDownTabClicable = document.querySelector("#navbarDropdownMenuLink");
let dropDownMenu = document.querySelector(".dropdown-menu");
// Otvaranje dropdown menija u navigaciji onhover
if (dropDownTabClicable) {
    dropDownTab.addEventListener("mouseenter", () => {
        dropDownMenu.classList.add("show");
        console.log("radim");
    });
}
// Zatvaranje dropdown menija u navigaciji na izlaz misa
if (dropDownMenu) {
    let dropDownList = [dropDownTab];
    dropDownList.forEach((element) => {
        element.addEventListener("mouseleave", () => {
            dropDownMenu.classList.remove("show");
            console.log("radim na izlas");
        });
    });
}
/*back to top*/
$("#back-to-top").hide();
$(document).ready(function () {
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() > 150) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });
    // scroll body to 0px on click
    $("#back-to-top").click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            400
        );
        return false;
    });
});

// Toast za poslatu poruku u kontakt formi
const toastMsg = document.querySelector('.toast')

function toast() {
    console.log('pokrenut toast')
    toastMsg.classList.replace('hide', 'show')
    setTimeout(() => {
        toastMsg.classList.replace('show', 'hide')

    }, 1200);
}

// Reset kontakt forme i modal kontakt forme
const kontaktForma = document.querySelector("#form-contact")
const kontaktFormaBtn = document.querySelector('.send-dugme')
if (kontaktForma) {
    kontaktForma.addEventListener('submit', toast)
    kontaktForma.addEventListener('submit', resetForm)
}

function resetForm() {
    setTimeout(() => {
        kontaktForma.reset();
    }, 1000);
}
