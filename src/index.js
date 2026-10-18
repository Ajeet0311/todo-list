import "./dom/projectUI.js";
import "./dom/taskUI.js";
import "./style.css";
import { loadFromStorage, renderProjectList} from "./modules/projectManager.js";

loadFromStorage();
renderProjectList();