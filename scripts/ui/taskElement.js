// scripts/ui/taskElement.js
import { openTaskModal } from "./modalHandlers.js";

/** Create task element function 
 * - create div with class for a task card
 * - stores the ID in a data attribute for reference
 * - add a click listener that opens a modal to view task
 * - returns the created DOM element 
 * @param {{id:number|string,title:string,description?:string,status:'todo'|'doing'|'done', priority?:string}} task
 * @returns {HTMLDivElement}
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.dataset.taskId = String(task.id);

  taskDiv.innerHTML = `

    <span class="task-title" title="${escapeHtml(task.title)}">${escapeHtml(task.title)}</span>
  `;

  taskDiv.addEventListener("click", () => openTaskModal(task));
  return taskDiv;
}

// to prevent rendering issues 
function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  }[m]));
}
