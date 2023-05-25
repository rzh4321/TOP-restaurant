import load_page from "./load_page.js";

load_page();

let home = document.getElementById('home');
home.addEventListener('click', () => {
    if (!home.classList.contains('active')) {
        alert('not good');
        load_page();
    }
})