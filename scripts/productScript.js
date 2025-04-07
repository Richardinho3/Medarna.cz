document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.querySelector('.amountInput');
    const decreaseBtn = document.querySelector('.amountDecrease');
    const increaseBtn = document.querySelector('.amountIncrease');
    
    decreaseBtn.addEventListener('click', function() {
        let value = parseInt(amountInput.value);
        if (value > 1) {
            amountInput.value = value - 1;
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        let value = parseInt(amountInput.value);
        if (value < 99) {
            amountInput.value = value +1;
        }
        
    });
});