
        function scrollSlider(sliderId, direction) {
        const slider = document.querySelector(sliderId);
        if (slider) {
            slider.scrollBy({
                left: direction * 1500,
                behavior: 'smooth'
            });
        }
}

function saveProductInfo(event, name, weight, price) {
    event.preventDefault(); 
    const productInfo = { name, weight, price };
    localStorage.setItem("selectedProduct", JSON.stringify(productInfo));
    window.location.href = "./product.html"; 
}
        

   