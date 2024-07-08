
//product page: quantity input selector buttons//
function setupQuantitySelector() {
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');

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

//product gallery image switch//
document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            mainImage.src = this.src;
            //this.src refers to URL of clicked thumbnail image//
        })
    })
})