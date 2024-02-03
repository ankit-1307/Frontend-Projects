var taskInput = document.getElementById("to-do-add");
let listContainer = document.getElementById("list-container");
var addBtn = document.querySelector(".add");
addBtn.addEventListener("click", function () {
    addTask();
});
function addTask() {
    if (event.type == "click" || event.type == "enter") {
        var taskVal = taskInput.value;
        if (taskVal != null && taskVal != "") {
            let unorderedList = document.getElementsByTagName("ul");
            let listItem = document.createElement("li");
            let cross = document.createElement("span");
            cross.innerHTML = "&#10060;";
            // listItem.appendChild(taskVal);
            listItem.textContent = taskVal;
            listItem.appendChild(cross);
            console.log("listItem.innerHTML" + listItem.innerHTML);
            // listItem.innerHTML = taskVal + cross.toString();

            listItem.classList.add("task");
            unorderedList[0].appendChild(listItem);
        } else {
            alert("Please enter a task" + "&#10060;");
        }
    }
    saveDate();
}
listContainer.addEventListener("click", function () {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("done");
        saveDate();
    }
});
listContainer.addEventListener("click", function () {
    if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove();
        saveDate();
    }
});

function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
