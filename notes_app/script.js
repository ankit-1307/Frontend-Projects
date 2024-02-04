let takeNotes = document.querySelector(".take-note");
let mainContent = document.querySelector(".container");
let notesContainer = document.querySelector(".notes-div");
takeNotes.addEventListener("click", function () {
    let paragraph = document.createElement("p");
    paragraph.classList.add("notes-container");
    paragraph.setAttribute("contenteditable", "true");
    let delImage = document.createElement("img");
    delImage.src = "images/delete.png";
    paragraph.appendChild(delImage);
    notesContainer.appendChild(paragraph);
});
let notesTaking = document.querySelectorAll(".notes-container");
console.log(notesTaking);
notesContainer.addEventListener("click", function () {
    if (event.target.tagName.toLowerCase() === "img") {
        event.target.parentElement.remove();
        saveData();
    } else if (event.target.tagName.toLowerCase() === "p") {
        notes = document.querySelectorAll(".notes-container");
        notes.forEach((element) => {
            element.onkeyup = function () {
                saveData();
            };
        });
    }
});

function saveData() {
    saveNotes = notesContainer.innerHTML;
    localStorage.setItem("data", saveNotes);
    console.log("saveNotes: " + saveNotes);
}
function showData() {
    notesContainer.innerHTML = localStorage.getItem("data");
}
showData();
