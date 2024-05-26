let taskList = [];

const add_button = document.getElementById("add");
const refresh_button = document.getElementById("refresher");

function addTask(){
    
    let task = document.getElementById("task-description").value;
    
        if (task !== "" && !taskList.includes(task)) {
        taskList.push(task);

        let list = document.getElementById("taskList");

        let listPrompt = document.createElement("div");
        listPrompt.className = "todoTask";

        let tick = document.createElement("input");
        tick.type = "checkbox";
        tick.onclick = function () {
            if(tick.checked) {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.backgroundColor = "lightgreen";
            listPrompt.classList.add("checked");
        
            } else {
            taskSpan.style.textDecoration = "none";
            taskSpan.style.backgroundColor = "initial"; 
            listPrompt.classList.remove("checked"); 
            }
        }
        listPrompt.appendChild(tick);
        let taskSpan = document.createElement("span");
        taskSpan.textContent = task;
        listPrompt.appendChild(taskSpan);

        let buttonSpace = document.createElement("div");
        listPrompt.appendChild(buttonSpace);


        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = function() {
            list.removeChild(listPrompt);
            taskList.splice(taskList.indexOf(task),1);
        }
        buttonSpace.appendChild(deleteButton);
        list.appendChild(listPrompt);
        document.getElementById("task-description").value = "";
        }
        else if(task == "") {
            alert("Task can't be empty!")
        }
        else if(taskList.includes(task)) {
            alert("Task already exists")
        } 

}

function refresh(){
    list = document.getElementById("taskList");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
   taskList.length = 0;
}

add_button.addEventListener("click", addTask);
refresh_button.addEventListener("click", refresh);

document.write("This webpage application has been made using HTML, CSS and JavaScript!")