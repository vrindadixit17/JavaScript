const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

let page = 1;
const limit = 10; // images per batch

async function loadImages() {
    loader.style.display = 'block';
    for (let i = 0; i < limit; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 10000)}`;
        img.alt = "Random Image";
        gallery.appendChild(img);
    }
    loader.style.display = 'none';
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadImages();
    }
}

loadImages();
window.addEventListener('scroll', handleScroll);
