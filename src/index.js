import load_page from "./load_page.js";
import load_home from "./home.js";

load_page();
load_home();

let main = document.querySelector('.main');
let home = document.getElementById('home');
let menu = document.getElementById('menu');
let contact = document.getElementById('contact');
home.addEventListener('click', () => {
    if (!home.classList.contains('active')) {
        while (main.childNodes.length != 1) {
            main.childNodes[main.childNodes.length-1].remove();
        }
        load_home();
    }
})