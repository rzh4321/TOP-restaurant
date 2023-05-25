export default function load_contact() {
    let contact = document.getElementById('contact');
    contact.insertAdjacentHTML('beforeend', `<img id="dripping" src="https://eckben.github.io/bearysBreakfastBar/img/dripping.png" alt="">`);
    let first_bee = document.querySelector('img.icon');
    first_bee.insertAdjacentText('afterend', "Contact Us");
    let main = document.querySelector('.main');
    main.insertAdjacentHTML('beforeend', `
    <div class="card">
        <span class="heading" style="align-self: flex-start; margin-left: 50px;">Mama Bear</span>
        <p>Chef
        <br>
        555-555-5554
        <br>
        totallyRealEmail@notFake.com</p>
        <img class="contact" src="https://eckben.github.io/bearysBreakfastBar/img/mamabear.png" alt="">
    </div>
    <div class="card">
        <span class="heading" style="align-self: flex-start; margin-left: 50px;">Mama Bear</span>
        <p>Chef
        <br>
        555-555-5554
        <br>
        totallyRealEmail@notFake.com</p>
        <img class="contact" src="https://eckben.github.io/bearysBreakfastBar/img/mamabear.png" alt="">
    </div>
    `);

}
