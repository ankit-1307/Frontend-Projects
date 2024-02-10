let firstName = document.querySelector("#fname");
let firstNameError = document.querySelector(".f-error");
let lastName = document.querySelector("#lname");
let lastNameError = document.querySelector(".l-error");
let email = document.querySelector("#email");
let emailError = document.querySelector(".e-error");
let message = document.querySelector("#msg");
let messageError = document.querySelector(".m-error");
let submitBtn = document.querySelector("#submit-btn");
// let image = document.getElementsByTagName("img");

// submitBtn.addEventListener("click", function (event) {
//     preventDefault();
// });
firstName.addEventListener("keyup", function (event) {
    preventDefault();
});
lastName.addEventListener("keyup", function (event) {
    preventDefault();
});
email.addEventListener("keyup", function (event) {
    preventDefault();
});
message.addEventListener("keyup", function (event) {
    preventDefault();
});
function preventDefault() {
    if (
        firstName.value == "" ||
        firstName.value.length == 0 ||
        firstName.value.length <= 2
    ) {
        firstNameError.style.visibility = "visible";
        firstName.placeholder = "";
    } else {
        firstNameError.style.visibility = "visible";
        firstNameError.firstElementChild.innerHTML = "";
        firstNameError.firstElementChild.nextElementSibling.src =
            "./images/circle-check-regular.svg";
    }
    if (
        lastName.value == "" ||
        lastName.value.length == 0 ||
        lastName.value.length < 2
    ) {
        lastNameError.style.visibility = "visible";
        lastName.placeholder = "";
    } else {
        lastNameError.style.visibility = "visible";
        lastNameError.firstElementChild.innerHTML = "";
        lastNameError.firstElementChild.nextElementSibling.src =
            "./images/circle-check-regular.svg";
    }
    if (
        email.value == "" ||
        email.value.length == 0 ||
        email.value.length < 15 ||
        !email.value.includes("@") ||
        !email.value.includes(".com")
    ) {
        emailError.style.visibility = "visible";
        email.placeholder = "";
    } else {
        emailError.style.visibility = "visible";
        emailError.firstElementChild.innerHTML = "";
        emailError.firstElementChild.nextElementSibling.src =
            "./images/circle-check-regular.svg";
    }
    if (
        message.value == "" ||
        message.value.length == 0 ||
        message.value.length < 31
    ) {
        messageError.style.visibility = "visible";
        message.placeholder = "";
    } else {
        messageError.style.visibility = "visible";
        messageError.firstElementChild.innerHTML = "";
        messageError.firstElementChild.nextElementSibling.src =
            "./images/circle-check-regular.svg";
    }
}
