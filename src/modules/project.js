import taskObject from "./task.js";

// Class project also works as task manager
export default class project {

    constructor(name){
        this.id = crypto.randomUUID();
        this.name = name;
        this.taskList = [];
    }

    addTask(title, description, dueDate, priority){
        this.taskList.push(new taskObject(title, description, dueDate, priority));
    }

    deleteTask(idToDelete){
        this.taskList = this.taskList.filter(task => task.id != idToDelete);
    }

    editTask(idToEdit, title, description, dueDate, priority){
        const taskToEdit = this.taskList.find(task => task.id === idToEdit);

        taskToEdit.title = title;
        taskToEdit.description = description;
        taskToEdit.dueDate = dueDate;
        taskToEdit.priority = priority;
    }

    renderTaskList(){
        const taskListDisplay = document.createElement('div');
        for (const task of this.taskList){
            const taskCard = document.createElement('div');
            taskCard.classList.add("taskCard");

            const content = document.createElement('div');
            content.classList.add("taskContent");
            content.textContent = `Title: ${task.title}
    Description: ${task.description}
    Due Date: ${task.dueDate}
    Priority: ${task.priority}`
            taskCard.appendChild(content);

            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit";
            editBtn.classList.add("editTask");
            editBtn.dataset.projectId = this.id;
            editBtn.dataset.taskId = task.id;
            taskCard.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("deleteTask");
            deleteBtn.dataset.projectId = this.id;
            deleteBtn.dataset.taskId = task.id;
            taskCard.appendChild(deleteBtn);

            taskListDisplay.appendChild(taskCard);
        }

        return taskListDisplay;
    }
}