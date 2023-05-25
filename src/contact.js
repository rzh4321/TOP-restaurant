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


//     container.innerHTML = `<div class="main">
//     <div class="title">
//         <img class="icon" style="top: -20px; right: 10px;" src="https://eckben.github.io/bearysBreakfastBar/img/bee.svg" alt="">
//         Beary's Breakfast Bar
//         <img class="icon" style="position: relative; left: 10px; top: 20px; transform: rotate(-240deg);" src="https://eckben.github.io/bearysBreakfastBar/img/bee.svg" alt="">

//     </div>
    // <div class="desc card">
    //     <img style="position: absolute; top: -80px; height: 100px;" src="https://eckben.github.io/bearysBreakfastBar/img/honeycomb.svg" alt="">
    //     <p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
    //     <span style="align-self: flex-start; margin-left: 50px;">Goldilocks</span>
    // </div>
    // <div class="card">
    //     <span class="heading" style="align-self: flex-start; margin-left: 50px;">Hours</span>
    //     <ul>
    //         <li>Sunday: 8am - 8pm</li>
    //         <li>Monday: 6am - 6pm</li>
    //         <li>Tuesday: 6am - 6pm</li>
    //         <li>Wednesday: 6am - 6pm</li>
    //         <li>Thursday: 6am - 10pm</li>
    //         <li>Friday: 6am - 10pm</li>
    //         <li>Saturday: 8am - 10pm</li>
    //     </ul>
    // </div>
//     <div class="card">
//         <span class="heading" style="align-self: flex-start; margin-left: 50px;">Location</span>
//         123 Forest Drive, Forestville, Maine
//     </div>
// </div>`;