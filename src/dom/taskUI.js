import { findProject, renderProject, saveToStorage } from "../modules/projectManager.js";

const taskDial = document.getElementById("taskDialog");
const taskForm = document.getElementById("taskForm");
let curProjId = null;
let curTaskId = null;

const mainContent = document.getElementById('mainContent');
mainContent.addEventListener('click', (event) => {

    // Add button
    if (event.target.classList.contains('addTaskBtn')){
        curProjId = event.target.value;
        curTaskId = null;

        taskDial.showModal();
        return;
    }

    // Edit Button
    if (event.target.classList.contains('editTask')){
        curProjId = event.target.dataset.projectId;
        curTaskId = event.target.dataset.taskId;

        const curProj = findProject(curProjId);
        const taskToEdit = curProj.taskList.find(task => task.id === curTaskId);

        // Prefill the form
        taskForm.querySelector('[name="title"]').value = taskToEdit.title;
        taskForm.querySelector('[name="description"]').value = taskToEdit.description;
        taskForm.querySelector('[name="dueDate"]').value = taskToEdit.dueDate;
        taskForm.querySelector('[name="priority"]').value = taskToEdit.priority;

        taskDial.showModal();
        return;
    }

    // Delete Button
    if (event.target.classList.contains('deleteTask')){
        curProjId = event.target.dataset.projectId;
        curTaskId = event.target.dataset.taskId;

        const curProj = findProject(curProjId);
        curProj.deleteTask(curTaskId);

        mainContent.replaceChildren(renderProject(curProjId));

        saveToStorage();
        return;
    }
});

// submit listener
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(taskForm);

    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate = formData.get('dueDate');
    const priority = formData.get('priority');

    const curProj = findProject(curProjId);

    // Add only if curTaskId is null else edit
    if (curTaskId){
        curProj.editTask(curTaskId, title, description, dueDate, priority);
    }
    else{
        curProj.addTask(title, description, dueDate, priority);
    }

    mainContent.replaceChildren(renderProject(curProjId));

    saveToStorage();
    
    taskForm.reset();
    curTaskId = null;
    taskDial.close();
});

// Cancel listener
const cancelBtn = document.getElementById('cancelTask');
cancelBtn.addEventListener('click', () => {
    taskForm.reset();
    curTaskId = null;
    taskDial.close();
});