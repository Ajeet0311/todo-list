import { addProject, deleteProject, renderProject, renderProjectList, saveToStorage } from "../modules/projectManager.js";


// Add project and render it
const addProj = document.getElementById("addProj");
const projDial = document.getElementById("projectDialog");
addProj.addEventListener('click' , () => {
    projDial.showModal();
});

const projForm = document.getElementById("projectForm");
projForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(projForm);

    const name = formData.get('name');

    addProject(name);
    renderProjectList();
    
    saveToStorage();

    projForm.reset();
    projDial.close();
});

// Cancel listener
const cancelBtn = document.getElementById('cancelProject');
cancelBtn.addEventListener('click', () => {
    projForm.reset();
    projDial.close();
})

// Select project and show it's content
const projList = document.getElementById('projList');
const mainContent = document.getElementById('mainContent');
projList.addEventListener('click', (event) => {
    if (event.target.classList.contains('projBtn')){
        mainContent.replaceChildren(renderProject(event.target.value));
        saveToStorage();
    }
});

// Delete project and erase it's content
mainContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('delProj')){
        deleteProject(event.target.value);
        mainContent.replaceChildren();
        renderProjectList();
        saveToStorage();
        return;
    }
});
