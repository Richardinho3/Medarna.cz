
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
    // Populate the datalist with product options
    fetch("../data/products.json")
        .then(response => response.json())
        .then(data => {
            const productOptions = document.getElementById('productOptions');
            
            // Sort products by name and info
            data.sort((a, b) => {
                let nameCompare = a.name.localeCompare(b.name);
                if (nameCompare === 0) {
                    return a.info.localeCompare(b.info);
                }
                return nameCompare;
            });

            data.forEach(product => {
                const option = document.createElement('option');
                option.value = `${product.name} - ${product.info}`;
                option.setAttribute('data-info', product.info);
                productOptions.appendChild(option);
            });

            // Handle search input selection
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('change', function(event) {
                    const [name, info] = this.value.split(' - ');
                    const product = data.find(p => p.name === name && p.info === info);
                    
                    if (product) {
                        // Use actual product data for redirection
                        saveProductInfo(
                            event,
                            product.name,
                            product.info,
                            product.price,
                            product.rating,
                            product.ratingCount
                        );
                    }
                });
            }
        })
        .catch(error => console.error('Error náčet produktů:', error));
});


