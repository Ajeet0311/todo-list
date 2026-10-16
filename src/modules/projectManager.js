import projectObject from "./project.js";

const projectList = [];

export function addProject(name){
    const project = new projectObject(name);
    projectList.push(project);
    return project;
}

export function deleteProject(idToDelete){
    projectList = projectList.filter(project => project.id != idToDelete);
}

export function showProjects(){
    for (const project of projectList){
        console.log(project.name);
        project.showTasks();
    }
}
