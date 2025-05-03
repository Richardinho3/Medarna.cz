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

document.addEventListener('DOMContentLoaded', function() {
    
    fetch("../data/products.json")
        .then(response => response.json())
        .then(products => {
            
            document.querySelectorAll('.product-link').forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const name = this.dataset.productName;
                    const info = this.dataset.productInfo;
                    
                    
                    const product = products.find(p => p.name === name && p.info === info);
                    if (product) {
                        localStorage.setItem("selectedProduct", JSON.stringify({
                            name: product.name,
                            weight: product.info,
                            price: product.price,
                            rating: product.rating,
                            ratingCount: product.ratingCount
                        }));
                        window.location.href = "./product.html";
                    }
                });
            });

            
            const productOptions = document.getElementById('productOptions');
            
            
            products.sort((a, b) => {
                let nameCompare = a.name.localeCompare(b.name);
                if (nameCompare === 0) {
                    return a.info.localeCompare(b.info);
                }
                return nameCompare;
            });

            products.forEach(product => {
                const option = document.createElement('option');
                option.value = `${product.name} - ${product.info}`;
                option.setAttribute('data-info', product.info);
                productOptions.appendChild(option);
            });

            
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('change', function(event) {
                    const [name, info] = this.value.split(' - ');
                    const product = products.find(p => p.name === name && p.info === info);
                    
                    if (product) {
                        
                        saveProductInfo(event,product.name,product.info,product.price,product.rating,product.ratingCount);
                    }
                });
            }
        })
        .catch(error => console.error('Error loading products:', error));
});


