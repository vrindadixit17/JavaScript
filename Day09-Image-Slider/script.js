const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const totalImages = slider.children.length;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 800}px)`;
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateSlider();
});

// Auto slide every 5 seconds
setInterval(() => {
    index = (index + 1) % totalImages;
    updateSlider();
}, 5000);
