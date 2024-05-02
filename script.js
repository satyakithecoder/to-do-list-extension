const input = document.querySelector('input');
const task_area = document.querySelector(".task-area");
const btn = document.querySelector("#add-task");
let prompt = false;
btn.addEventListener("click", () => {
    if (input.value.length == 0) {
        window.alert("Please Enter A Task");
    } else {
        const task_container = document.createElement('div');
        task_container.classList.add("task-container");
        const task = document.createElement('input');
        task.setAttribute("type", "checkbox");
        const taskLabel = document.createElement('label');
        taskLabel.textContent = input.value;
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Edit";
        updateBtn.classList.add("update-btn");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add("delete-btn");
        updateBtn.addEventListener("click", (e) => { 
            const text = e.target.parentElement.querySelector('label').textContent; 
            const edited_task = window.prompt("Edit Task: " + text);
            if (edited_task !== null) { 
                e.target.parentElement.querySelector('label').textContent = edited_task;
            }
        });
        deleteBtn.onclick = function () {
            deleteBtn.parentElement.style.display = "none";
        }
    task.addEventListener("change", () => {
    const parentElement = task.parentElement;
    const label = parentElement.querySelector('label');
    if (task.checked) {
        label.style.textDecoration = "line-through";
        label.style.textDecorationThickness = "2px";
    } else {
        label.style.textDecoration = "none";
    }
});
        task_container.appendChild(task);
        task_container.appendChild(taskLabel);
        task_container.appendChild(updateBtn);
        task_container.appendChild(deleteBtn);
        task_area.appendChild(task_container);
        input.value = "";
    }
});