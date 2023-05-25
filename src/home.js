export default function load_home() {
    let home = document.getElementById('home');
    home.insertAdjacentHTML('beforeend', `<img id="dripping" src="https://eckben.github.io/bearysBreakfastBar/img/dripping.png" alt="">`);    let first_bee = document.querySelector('img.icon');
    first_bee.insertAdjacentText('afterend', "Beary's Breakfast Bar");
    let main = document.querySelector('.main');
    main.insertAdjacentHTML('beforeend', `    <div class="desc card">
    <img style="position: absolute; top: -80px; height: 100px;" src="https://eckben.github.io/bearysBreakfastBar/img/honeycomb.svg" alt="">
    <p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
    <span style="align-self: flex-start; margin-left: 50px;">Goldilocks</span>
</div>
<div class="card">
    <span class="heading" style="align-self: flex-start; margin-left: 50px;">Hours</span>
    <ul>
        <li>Sunday: 8am - 8pm</li>
        <li>Monday: 6am - 6pm</li>
        <li>Tuesday: 6am - 6pm</li>
        <li>Wednesday: 6am - 6pm</li>
        <li>Thursday: 6am - 10pm</li>
        <li>Friday: 6am - 10pm</li>
        <li>Saturday: 8am - 10pm</li>
    </ul>
</div>`);

}
