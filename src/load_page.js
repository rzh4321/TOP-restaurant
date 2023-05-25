export default function load_page() {
    let header = document.createElement('div')
    let home_btn = document.createElement('button');
    home_btn.id = 'home';
    home_btn.textContent = 'Home';
    let menu_btn = document.createElement('button');
    menu_btn.id = 'menu';
    menu_btn.textContent = 'Menu';
    let contact_btn = document.createElement('button');
    contact_btn.id = 'contact';
    contact_btn.textContent = 'Contact';
    header.append(home_btn, menu_btn, contact_btn);
    header.classList.add('header')
    document.body.append(header);
    // container 
    let container = document.createElement('div')
    container.classList.add('container');
    let main = document.createElement('div');
    main.classList.add('main');
    container.append(main);
    let title = document.createElement('div');
    title.id = 'title';
    main.append(title);
    title.innerHTML = `<img class="icon" style="top: -20px; right: 10px;" src="https://eckben.github.io/bearysBreakfastBar/img/bee.svg" alt="">
    <img class="icon" style="position: relative; left: 10px; top: 20px; transform: rotate(-240deg);" src="https://eckben.github.io/bearysBreakfastBar/img/bee.svg" alt="">`;

    document.body.append(container);
    // footer
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = `<span>Hive icon made by Freepik</span>
    <span>Bee icons made by Smashicons</span>
    <span>Background image ceated bby dgim-studio</span>`;
    document.body.append(footer);
}
