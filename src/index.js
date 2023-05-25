import load_page from "./load_page.js";
import load_home from "./home.js";
import load_menu from "./menu.js";

load_page();
load_home();

let main = document.querySelector('.main');
let home = document.getElementById('home');
let menu = document.getElementById('menu');
let contact = document.getElementById('contact');

home.classList.add('active');
home.addEventListener('click', () => {
    if (!home.classList.contains('active')) {
        while (main.childNodes.length != 1) {
            main.childNodes[main.childNodes.length-1].remove();
        }
        home.classList.add('active');
        menu.classList.remove('active');
        menu.children[0].remove();
        contact.classList.remove('active');
        contact.children[0].remove();
        title.childNodes[1].remove();

        load_home();
    }
})