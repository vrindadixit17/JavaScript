const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value) {
            if (display.textContent === "0" && value !== ".") {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }
    });
});

equals.addEventListener("click", () => {
    try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch (err) {
        display.textContent = "Error";
        currentInput = "";
    }
});

clear.addEventListener("click", () => {
    currentInput = "";
    display.textContent = "0";
});
