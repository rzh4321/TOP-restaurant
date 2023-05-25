function load_page() {
    let header = document.createElement('div')
    let home_btn = document.createElement('button');
    home_btn.innerHTML = `Home <img id="dripping" src="https://eckben.github.io/bearysBreakfastBar/img/dripping.png" alt="">`;
    let menu_btn = document.createElement('button');
    menu_btn.textContent = 'Menu';
    let contact_btn = document.createElement('button');
    contact_btn.textContent = 'Contact';
    header.append(home_btn, menu_btn, contact_btn);
    header.classList.add('header')
    document.body.append(header);




}

load_page();