let btn = document.querySelector(".btn-container");
let toastBox = document.querySelector(".toast-box");
let flexToast = document.querySelector(".flex-toast");
btn.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "button") {
        if (e.target.innerHTML === "Success") {
            let divSuccess = document.createElement("div");
            let divSpan = document.createElement("p");
            divSpan.innerHTML =
                '<i class="fa-solid fa-circle-check success"></i> You have successfully completed';
            divSuccess.classList.add("toast-box");
            divSuccess.classList.add("success");
            divSuccess.appendChild(divSpan);
            divSuccess.style.display = "block";
            flexToast.appendChild(divSuccess);
            setTimeout(function () {
                divSuccess.remove();
            }, 5000);
            toastBox.style.display = "block";
        } else if (e.target.innerHTML === "Error") {
            let divSuccess = document.createElement("div");
            let divSpan = document.createElement("p");
            divSpan.innerHTML =
                "<i class='fa-solid fa-xmark error'></i> We got an error";
            divSuccess.classList.add("toast-box");
            divSuccess.classList.add("error");
            divSuccess.appendChild(divSpan);
            divSuccess.style.display = "block";
            flexToast.appendChild(divSuccess);
            setTimeout(function () {
                // alert("Success");
                divSuccess.remove();
            }, 5000);
            toastBox.style.display = "block";
        } else if (e.target.innerHTML === "Invalid") {
            let divSuccess = document.createElement("div");
            let divSpan = document.createElement("p");
            divSpan.innerHTML =
                '<i class="fa-solid fa-circle-exclamation invalid"></i> It\'s not a valid message';
            divSuccess.classList.add("toast-box");
            divSuccess.classList.add("invalid");
            divSuccess.appendChild(divSpan);
            divSuccess.style.display = "block";
            flexToast.appendChild(divSuccess);
            setTimeout(function () {
                // alert("Success");
                divSuccess.remove();
            }, 5000);
            toastBox.style.display = "block";
        }
    }
});
