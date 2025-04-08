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


    const heartIcon = document.querySelector('.fa-heart');
    const emptyHeartIcon = document.querySelector('.fa-regular.fa-heart');
    
    
    if (emptyHeartIcon) {
        emptyHeartIcon.addEventListener('click', function() {
            
            if (this.classList.contains('fa-regular')) {
                this.classList.remove('fa-regular');
                this.classList.add('fa-solid');
                this.style.color = '#e63946'; 
            } else {
                this.classList.remove('fa-solid');
                this.classList.add('fa-regular');
                this.style.color = '#e63946'; 
            }
        });
    }


    const productPicture = document.querySelector('.productSoleImageContainer');
    const popupBackground = document.querySelector('.productImagePopupBackground');
    const closePopupButton = document.querySelector('.closePopupButton');
    
    productPicture.addEventListener('click', function() {
        popupBackground.style.display = 'flex';

        
    });

    closePopupButton.addEventListener('click', function() {
        
        popupBackground.style.display = 'none';
    });
});