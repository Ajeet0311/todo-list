import taskObject from "./task.js";

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
        const taskToEdit = this.taskList.find(task => task.id == idToEdit);

        taskToEdit.title = title;
        taskToEdit.description = description;
        taskToEdit.dueDate = dueDate;
        taskToEdit.priority = priority;
    }

    showTasks(){
        for (const task of this.taskList){
            console.log(`Title: ${task.title}
Description: ${task.description}
Due Date: ${task.dueDate}
Priority: ${task.priority}`);
        }
    }
}