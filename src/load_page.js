export default function load_page() {
    let header = document.createElement('div')
    let home_btn = document.createElement('button');
    home_btn.id = 'home';
    home_btn.classList.add('active');
    home_btn.innerHTML = `Home <img id="dripping" src="https://eckben.github.io/bearysBreakfastBar/img/dripping.png" alt="">`;
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
    Beary's Breakfast Bar
    <img class="icon" style="position: relative; left: 10px; top: 20px; transform: rotate(-240deg);" src="https://eckben.github.io/bearysBreakfastBar/img/bee.svg" alt="">`;

//     container.innerHTML = `<div class="main">
//     <div class="title">
//         <img class="icon" style="top: -20px; right: 10px;" src="https://eckben.github.io/bearysBreakfastBar/img/bee.svg" alt="">
//         Beary's Breakfast Bar
//         <img class="icon" style="position: relative; left: 10px; top: 20px; transform: rotate(-240deg);" src="https://eckben.github.io/bearysBreakfastBar/img/bee.svg" alt="">

//     </div>
//     <div class="desc card">
//         <img style="position: absolute; top: -80px; height: 100px;" src="https://eckben.github.io/bearysBreakfastBar/img/honeycomb.svg" alt="">
//         <p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
//         <span style="align-self: flex-start; margin-left: 50px;">Goldilocks</span>
//     </div>
//     <div class="card">
//         <span class="heading" style="align-self: flex-start; margin-left: 50px;">Hours</span>
//         <ul>
//             <li>Sunday: 8am - 8pm</li>
//             <li>Monday: 6am - 6pm</li>
//             <li>Tuesday: 6am - 6pm</li>
//             <li>Wednesday: 6am - 6pm</li>
//             <li>Thursday: 6am - 10pm</li>
//             <li>Friday: 6am - 10pm</li>
//             <li>Saturday: 8am - 10pm</li>
//         </ul>
//     </div>
//     <div class="card">
//         <span class="heading" style="align-self: flex-start; margin-left: 50px;">Location</span>
//         123 Forest Drive, Forestville, Maine
//     </div>
// </div>`;
    document.body.append(container);
    // footer
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = `<span>Hive icon made by Freepik</span>
    <span>Bee icons made by Smashicons</span>
    <span>Background image ceated bby dgim-studio</span>`;
    document.body.append(footer);
}
