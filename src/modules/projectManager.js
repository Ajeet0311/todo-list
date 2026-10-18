import projectObject from "./project.js";

let projectList = [];

export function addProject(name){
    projectList.push(new projectObject(name));
}

export function deleteProject(idToDelete){
    projectList = projectList.filter(project => project.id != idToDelete);
}

export function findProject(id){
    return projectList.find(proj => proj.id === id);
}

export function renderProject(id){

    const projectToShow = findProject(id);

    const projCard = document.createElement('div');
    projCard.classList.add("proContent");

    // Project Header
    const projHeader = document.createElement('div');
    projHeader.classList.add("projHeader");

    const projName = document.createElement('div');
    projName.classList.add("projName");
    projName.textContent = projectToShow.name;
    projHeader.appendChild(projName);

    const delProj = document.createElement('button');
    delProj.classList.add("delProj");
    delProj.textContent = "Delete Project";
    delProj.value = projectToShow.id;
    projHeader.appendChild(delProj);

    const addTaskToProj = document.createElement('button');
    addTaskToProj.classList.add('addTaskBtn');
    addTaskToProj.textContent = "Add Task";
    addTaskToProj.value = projectToShow.id;
    projHeader.appendChild(addTaskToProj);

    projCard.appendChild(projHeader);

    // Task List
    projCard.appendChild(projectToShow.renderTaskList());

    return projCard;
}

export function renderProjectList(){
    const projList = document.getElementById('projList');
    projList.replaceChildren();

    for(const project of projectList){
        const projBtn = document.createElement('button');
        projBtn.classList.add('projBtn');
        projBtn.textContent = project.name;
        projBtn.value = project.id;

        projList.appendChild(projBtn);
    }
}