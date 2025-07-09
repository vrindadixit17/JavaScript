const eventNameInput = document.getElementById("event-name");
const eventDateInput = document.getElementById("event-date");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

const countdownDiv = document.getElementById("countdown");
const eventTitle = document.getElementById("event-title");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const endMessage = document.getElementById("end-message");

let countdownInterval;

// Load from localStorage
window.onload = () => {
    const saved = JSON.parse(localStorage.getItem("countdown"));
    if (saved) {
        eventNameInput.value = saved.name;
        eventDateInput.value = saved.date;
        startCountdown(saved.name, saved.date);
    }
};

startBtn.addEventListener("click", () => {
    const name = eventNameInput.value.trim();
    const date = eventDateInput.value;

    if (!name || !date) {
        alert("Please enter both event name and date.");
        return;
    }

    localStorage.setItem("countdown", JSON.stringify({ name, date }));
    startCountdown(name, date);
});

resetBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    localStorage.removeItem("countdown");
    countdownDiv.style.display = "none";
    endMessage.classList.add("hidden");
    eventNameInput.value = "";
    eventDateInput.value = "";
});

function startCountdown(name, date) {
    const eventDate = new Date(date).getTime();
    eventTitle.textContent = `Countdown to ${name}`;
    countdownDiv.style.display = "block";
    endMessage.classList.add("hidden");

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;

        if (diff <= 0) {
            clearInterval(countdownInterval);
            countdownDiv.style.display = "none";
            endMessage.textContent = `🎉 It's time for ${name}!`;
            endMessage.classList.remove("hidden");
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, "0");
        hoursEl.textContent = hours.toString().padStart(2, "0");
        minutesEl.textContent = minutes.toString().padStart(2, "0");
        secondsEl.textContent = seconds.toString().padStart(2, "0");
    }, 1000);
}
