const passwordDisplay = document.getElementById("passwordDisplay");
const lengthInput = document.getElementById("length");
const includeUpper = document.getElementById("includeUpper");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    let chars = lowercaseChars;
    if (includeUpper.checked) chars += uppercaseChars;
    if (includeNumbers.checked) chars += numberChars;
    if (includeSymbols.checked) chars += symbolChars;

    let password = "";
    for (let i = 0; i < lengthInput.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    passwordDisplay.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    if (!passwordDisplay.value) return;
    navigator.clipboard.writeText(passwordDisplay.value)
        .then(() => alert("Password copied to clipboard!"));
});
