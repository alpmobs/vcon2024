var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

// Add event listener to hamburger menu icon
CShamburgerMenu.addEventListener("click", function () {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// Add event listeners to navigation links to hide menu when clicked
document.querySelectorAll('#cs-navigation a').forEach(link => {
    link.addEventListener('click', function() {
        // Hide navigation menu
        CShamburgerMenu.classList.remove("cs-active");
        CSnavbarMenu.classList.remove("cs-active");
        CSbody.classList.remove("cs-open");
        // Check the aria-expanded value
        ariaExpanded();
    });
});

// Check the value of aria-expanded on the cs-ul and change it accordingly whether it is expanded or not
function ariaExpanded() {
    const csUL = document.querySelector("#cs-expanded");
    const csExpanded = csUL.getAttribute("aria-expanded");

    if (csExpanded === "false") {
        csUL.setAttribute("aria-expanded", "true");
    } else {
        csUL.setAttribute("aria-expanded", "false");
    }
}
