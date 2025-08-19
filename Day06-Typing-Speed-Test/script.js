const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed tests can improve your accuracy.",
    "Practice makes perfect in everything you do.",
    "JavaScript is a versatile programming language.",
    "Stay focused and keep typing without errors."
];

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");

let currentSentence = "";
let startTime = null;
let interval = null;

function startTest() {
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceEl.textContent = currentSentence;
    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();
    timeEl.textContent = "0";
    wpmEl.textContent = "0";
    accuracyEl.textContent = "0";
    startTime = null;

    if (interval) clearInterval(interval);

    interval = setInterval(() => {
        if (startTime) {
            const timePassed = Math.floor((Date.now() - startTime) / 1000);
            timeEl.textContent = timePassed;
            calculateStats();
        }
    }, 1000);
}

function calculateStats() {
    const typed = inputEl.value;
    const correctChars = typed.split("").filter((char, i) => char === currentSentence[i]).length;
    const totalChars = typed.length;

    const wordsTyped = typed.trim().split(/\s+/).length;
    const timeInMinutes = parseInt(timeEl.textContent) / 60 || 1 / 60;
    const wpm = Math.round(wordsTyped / timeInMinutes);

    const accuracy = totalChars === 0 ? 0 : Math.round((correctChars / totalChars) * 100);

    wpmEl.textContent = isNaN(wpm) ? 0 : wpm;
    accuracyEl.textContent = accuracy;
}

inputEl.addEventListener("input", () => {
    if (!startTime) {
        startTime = Date.now();
    }

    calculateStats();

    if (inputEl.value === currentSentence) {
        clearInterval(interval);
        inputEl.disabled = true;
    }
});

restartBtn.addEventListener("click", startTest);

window.onload = startTest;
