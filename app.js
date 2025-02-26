let taskContainer = document.querySelector(".taskContainer");
let textInputArea = document.getElementById("textInputArea");
let taskAddBtn = document.getElementById("taskAddBtn");

const createTaskBox = (textval) => {
    let taskbox = document.createElement("li");

    let text = document.createElement("p");
    let taskBtn = document.createElement("div");
    let doneBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    text.setAttribute("class", "task");
    text.setAttribute("contenteditable", "true");
    taskBtn.setAttribute("class", "taskBtn");
    doneBtn.setAttribute("class", "done");
    deleteBtn.setAttribute("class", "delete");

    doneBtn.innerText = "Done";
    deleteBtn.innerText = "Delete";
    text.innerText = textval;

    taskbox.appendChild(text);
    taskbox.appendChild(taskBtn);
    taskbox.appendChild(deleteBtn);
    taskbox.appendChild(doneBtn);
    taskbox.appendChild(deleteBtn);
    taskContainer.appendChild(taskbox);
}

taskAddBtn.addEventListener("click", () => {
    if (textInputArea.value != "") {
        let textval = textInputArea.value.trim();
        createTaskBox(textval);
        
        textInputArea.value = "";
        textInputArea.setAttribute("placeholder","Type here!");
    }
    else{
        textInputArea.setAttribute("placeholder", "you didn't typed any thing here")
    }

})

taskContainer.addEventListener("click", (det) => {
    if (det.target.classList.contains("delete")) {
        det.target.parentElement.remove();
    }
    
    if(det.target.classList.contains("done")){
        det.target.parentElement.style.opacity = 0.5
    }
})
