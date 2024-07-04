let slides = document.getElementsByClassName("slider_slide");
let navlinks = document.getElementsByClassName("slider_navlink");
let currentSlide = 0;

//* moveTo parameter represents index of the slide we want to move to.
//* if moveTo >= no. of slides, go to first slide
//* if moveTo < 0, go to last slide
function changeSlide(moveTo) {
    if (moveTo >= slides.length) { moveTo = 0; }
    if (moveTo < 0) { moveTo = slides.length - 1; }

    //remove "active" class from current slide and its corresponding navigation link
    //add "active" class to new slide and its corresponding navigation link
    //update currentSlide variable to new slide index
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");

    //currentSlide is a global variable that stores index of currently displayed slide
    //after fn has done all the work to change visible slide by toggling classes, updates currentSlide to reflect new index

    currentSlide = moveTo;
}

// anonymous function allows immediate execution when click event occurs. function does not need a name as it is not mean to be called elsewhere in the code

document.getElementById("nav-button-next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button-prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

//selects all dots and adds a click event listener for each dot.
//checks if clicked navigation link is different from currently displayed slide.

document.querySelectorAll('.slider_navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

//product page: quantity input selector buttons//

function setupQuantitySelector() {
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');


    if (!minusBtn || !plusBtn || !quantityInput) {
        console.error('Quantity selector elements not found');
        return;
    }

    console.log('Quantity selector elements found, setting up listeners');



    minusBtn.addEventListener('click', function () {
        let value = parseInt(quantityInput.value);
        //retrieves current value of input field. but value is always a string even if it contains number. 
        //parseInt() converts string value into integer. 
        if (value > 1) {
            value--;
            quantityInput.value = value;
            //update input field's value with new decreased value.
        }
    });

    //Add upper limit
    plusBtn.addEventListener('click', function () {
        let value = parseInt(quantityInput.value);
        if (value < 99) {
            value++;
            quantityInput.value = value;
        }
    });

    // Handling direct input
    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            quantityInput.value = 1;
        } else if (value > 99) {
            quantityInput.value = 99;
        }
    })
}

// To ensure DOM fully loads before running script
document.addEventListener('DOMContentLoaded', function () {
    setupQuantitySelector();
});
