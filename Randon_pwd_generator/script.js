const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetter = "abcdefghijklmnopqrstuvwxy";
const numbers = "0123456789";
const specialSymbols = "~!@#$%^&*()[{]}+-/|=?`";
const pwdLength = 12;
let password = document.getElementById("password");
function generatePassword() {
    generatedPwd = "";

    while (generatedPwd.length < pwdLength) {
        generatedPwd +=
            upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)];
        generatedPwd +=
            lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)];
        generatedPwd += numbers[Math.floor(Math.random() * numbers.length)];
        generatedPwd +=
            specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
    }

    password.value = generatedPwd;
}
function copyPassword() {
    // password.style.backgroundColor = "#fff";
    password.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(password.value);
}
