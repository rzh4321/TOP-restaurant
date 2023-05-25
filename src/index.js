import load_page from "./load_page.js";

load_page();

let home = document.getElementById('home');
let menu = document.getElementById('menu');
let contact = document.getElementById('contact');
home.addEventListener('click', () => {
    if (!home.classList.contains('active')) {
        load_page();
    }
})