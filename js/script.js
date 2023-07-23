const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");


// Tabs Menu Event Listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// Hamburger Button Event Listener
btn.addEventListener('click', navToggle);

function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach((tab => {
        tab.children[0].classList.remove("border-b-4", "border-grayishBlue", "md:border-b-0");
    }));

    // Hide all panels
    panels.forEach((panel) => panel.classList.add("hidden"));

    // Activate clicked tab and panel based on data target
    e.target.classList.add("border-b-4", "border-grayishBlue");

    const classString = e.target.getAttribute('data-target');

    document.getElementById("panels").getElementsByClassName(classString)[0].classList.remove("hidden");
}

function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");

    if(menu.classList.contains("flex")) {
        logo.setAttribute("src", "images/new-construction-white.svg");
    } else {
        logo.setAttribute("src", "images/new construction.svg");
    }
}

// New Menu Functionality Self Closing
const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetSection = document.querySelector(event.target.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Close Menu After 1 Second
        setTimeout(() => {
            menu.classList.remove("flex");
            menu.classList.add("hidden");
            btn.classList.remove("open");
            logo.setAttribute("src", "images/new construction.svg");
        }, 750);
    });
});