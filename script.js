
        function scrollSlider(sliderId, direction) {
        const slider = document.querySelector(sliderId);
        if (slider) {
            slider.scrollBy({
                left: direction * 1500,
                behavior: 'smooth'
            });
        }
}
        
        
   