const memeImage = document.getElementById("memeImage");
const memeTop = document.getElementById("memeTop");
const memeBottom = document.getElementById("memeBottom");

const topInput = document.getElementById("topText");
const bottomInput = document.getElementById("bottomText");
const newMemeBtn = document.getElementById("newMemeBtn");

let memes = [];

// Fetch memes from Imgflip API
fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
        memes = data.data.memes;
    })
    .catch(err => console.error(err));

// Load random meme
function getRandomMeme() {
    if (memes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * memes.length);
    memeImage.src = memes[randomIndex].url;
}

// Update meme text
topInput.addEventListener("input", () => {
    memeTop.textContent = topInput.value;
});

bottomInput.addEventListener("input", () => {
    memeBottom.textContent = bottomInput.value;
});

newMemeBtn.addEventListener("click", getRandomMeme);
