import { addProject, deleteProject, showProjects } from "./modules/projectManager";

const defaultProject = addProject("Default");

defaultProject.addTask("exam prep", "Prepare for physics exam", "25-10-2026", 3);

showProjects();