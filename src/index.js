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
        home.classList.add('active');
        cleanup(home);
        load_home();
    }
})

menu.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        cleanup(menu);
        load_menu();
    }
})

function cleanup(btn) {
    while (main.childNodes.length != 1) {
        main.childNodes[main.childNodes.length-1].remove();
    }
    title.childNodes[1].remove();
    let btns = [home, menu, contact];
    for (let b of btns) {
        if (b != btn) {
            b.classList.remove('active');
            if (b.children[0] != undefined)
                b.children[0].remove();
        }
    }
}