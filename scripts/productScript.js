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




    const productInfo = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!productInfo) {
        document.getElementById("productName").innerText = "Produkt nenalezen";
        return;
    }

    
    document.getElementById("productName").innerText = productInfo.name;
    document.getElementById("productWeight").innerText = productInfo.weight;
    document.getElementById("productPrice").innerText = productInfo.price;
    document.getElementById("productRating").innerText = productInfo.rating;
    document.getElementById("productRatingCount").innerText = "  (" + productInfo.ratingCount + " hodnocení)";

    
     
    
    fetch("../data/products.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            
            
            
            const product = data.find(p => p.name === productInfo.name);
            
            

            const descriptionElement = document.getElementById("productDescription");
            const productImage = document.querySelector('.productSoleImageContainer');
            const popupImage = document.querySelector('.popupContent');

            if (product) {
                if (product.description) {
                    descriptionElement.innerText = product.description;
                }
                
                // Jestli existuje obrazek v jsonu , setne ho 
                if (product.img) {
                    const imgPath = `../${product.img}`;
                    
                    if (productImage) productImage.style.backgroundImage = `url('${imgPath}')`;
                    if (popupImage) popupImage.style.backgroundImage = `url('${imgPath}')`;
                }
            } else {
                descriptionElement.innerText = "Produkt nebyl nalezen v jsonu.";
            }

            // Corrected star rating logic
            const ratingInt = parseFloat(productInfo.rating ?? "0");
            const starElements = document.querySelectorAll('.stars i');

            if (starElements.length > 0) {
                starElements.forEach((star, index) => {
                    star.classList.remove('fa-solid', 'fa-star', 'fa-regular', 'fa-star-half-alt');

                    if (index < Math.floor(ratingInt)) {
                        star.classList.add('fa-solid', 'fa-star'); 
                    } else if (index === Math.floor(ratingInt) && ratingInt % 1 !== 0) {
                        star.classList.add('fa-solid', 'fa-star-half-alt'); 
                    } else {
                        star.classList.add('fa-regular', 'fa-star'); 
                    }
                });
            }
        })
        .catch(error => {
            
            document.getElementById("productDescription").innerText = "Chyba s popiskem.";
        });


});






