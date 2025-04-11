
        function scrollSlider(sliderId, direction) {
        const slider = document.querySelector(sliderId);
        if (slider) {
            slider.scrollBy({
                left: direction * 1500,
                behavior: 'smooth'
            });
        }
}

function saveProductInfo(event, name, weight, price, rating, ratingCount) {
    event.preventDefault(); 
    const productInfo = { name, weight, price, rating, ratingCount};
    localStorage.setItem("selectedProduct", JSON.stringify(productInfo));
    window.location.href = "./product.html"; 
}
        

   