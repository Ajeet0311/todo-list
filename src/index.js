import "./dom/projectUI.js";
import "./dom/taskUI.js";
import "./style.css";
import { addProject, renderProjectList} from "./modules/projectManager.js";

addProject("Default");
renderProjectList();