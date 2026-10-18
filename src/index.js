import "./dom/projectUI.js";
import "./dom/taskUI.js";
import { addProject, renderProjectList} from "./modules/projectManager.js";

addProject("Default");
renderProjectList();