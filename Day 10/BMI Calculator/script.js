const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = "⚠️ Please enter valid weight and height!";
        resultDiv.style.color = "red";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    resultDiv.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
    resultDiv.style.color = "#111";
}

calculateBtn.addEventListener("click", calculateBMI);
