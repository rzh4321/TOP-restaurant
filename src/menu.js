export default function load_menu() {
    let menu = document.getElementById('menu');
    menu.insertAdjacentHTML('beforeend', `<img id="dripping" src="https://eckben.github.io/bearysBreakfastBar/img/dripping.png" alt="">`);
    let first_bee = document.querySelector('img.icon');
    first_bee.insertAdjacentText('afterend', "Menu");
    let main = document.querySelector('.main');
    main.insertAdjacentHTML('beforeend', `
    <div class="title">
        <img style="position: absolute;top: 20px;right: -5px;height: 50px;" src="https://eckben.github.io/bearysBreakfastBar/img/honeycomb.svg" alt="">
        Beverages
    </div>
    <div class="card">
        <span class="heading" style="align-self: flex-start; margin-left: 50px;">Honey Tea</span>
        <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
        <br>
        <br>
        <div class='price-photo' style='align-self: flex-start; margin-left: 50px;'>
            <span class="heading">$2</span>
            <img src="https://eckben.github.io/bearysBreakfastBar/img/honeyTea.jpg" alt="">
        </div>
    </div>
    <div class="card">
        <span class="heading" style="align-self: flex-start; margin-left: 50px;">Honey Tea</span>
        <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
        <br>
        <br>
        <div class='price-photo' style='align-self: flex-start; margin-left: 50px;'>
            <span class="heading">$2</span>
            <img src="https://eckben.github.io/bearysBreakfastBar/img/honeyTea.jpg" alt="">
        </div>
    </div>
    <div class="title">
        <img style="position: absolute;top: 20px;right: -5px;height: 50px;" src="https://eckben.github.io/bearysBreakfastBar/img/honeycomb.svg" alt="">
        Beverages
    </div>
    <div class="card">
        <span class="heading" style="align-self: flex-start; margin-left: 50px;">Honey Tea</span>
        <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
        <br>
        <br>
        <div class='price-photo' style='align-self: flex-start; margin-left: 50px;'>
            <span class="heading">$2</span>
            <img src="https://eckben.github.io/bearysBreakfastBar/img/honeyTea.jpg" alt="">
        </div>
    </div>
    <div class="card">
        <span class="heading" style="align-self: flex-start; margin-left: 50px;">Honey Tea</span>
        <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
        <br>
        <br>
        <div class='price-photo' style='align-self: flex-start; margin-left: 50px;'>
            <span class="heading">$2</span>
            <img src="https://eckben.github.io/bearysBreakfastBar/img/honeyTea.jpg" alt="">
        </div>
    </div>
    `);

}
