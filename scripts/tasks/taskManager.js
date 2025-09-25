// scripts/tasks/taskManager.js
import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";
import { renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

/** 
 * The next available task ID 
 * - lookas at current IDs
 * - finds the largest one and returins that number + 1
*/
function getNextId(tasks) {
  return tasks.length ? Math.max(...tasks.map((t) => Number(t.id) || 0)) + 1 : 1;
}

/** 
 * Add a new task function 
 * - a new task from the form and adds it to the list
 * - retrieves and cleans form input values for new task/s
 */
export function addNewTask() {
  const title = document.getElementById("title-input")?.value.trim();
  const description = document.getElementById("desc-input")?.value.trim();
  const status = document.getElementById("select-status")?.value || "todo";
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;  // to prevent task creation if the title is empty 

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: getNextId(tasks),
    title,
    description: description || "",
    status,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);
  renderTasks(updatedTasks);
  resetForm();
  overlay?.close();
}

/**
 * Update task by ID 
 * - loads task and finds the one with matching ID 
 * - merges the updated fields and saves (re-renders) the lsit
 */
export function updateTaskById(id, updates) {
  const tasks = loadTasksFromStorage();
  const idx = tasks.findIndex((t) => String(t.id) === String(id));
  if (idx === -1) return;
  tasks[idx] = { ...tasks[idx], ...updates };
  saveTasksToStorage(tasks);
  renderTasks(tasks);
}

/** Delete a task by iID, then re-render task board */
export function deleteTaskById(id) {
  let tasks = loadTasksFromStorage();
  tasks = tasks.filter((t) => String(t.id) !== String(id));
  saveTasksToStorage(tasks);
  renderTasks(tasks);
}

// Update task priorities 
function updateTaskPriorities() {
  const tasks = Array.from(document.querySelectorAll(".task-modal"));

  tasks.forEach(task => {
    const priority = task.dataset.priority; // low, medium, high
    const priorityDiv = task.querySelector(".task-priority");

    // Assign priority labels 
    if (priority === "simple") {
      priorityDiv.textContent = "Priority: Low";
      priorityDiv.className = "task-priority low";
    } else if (priority === "medium") {
      priorityDiv.textContent = "Priority: Medium";
      priorityDiv.className = "task-priority medium";
    } else if (priority === "difficult") {
      priorityDiv.textContent = "Priority: High";
      priorityDiv.className = "task-priority high";
    }
  });

  // Sort by priority level
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  tasks.sort((a, b) => priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority]);

  // Re-append in order based on priority 
  const parent = tasks[0]?.parentElement;
  if (parent) {
    tasks.forEach(task => parent.appendChild(task));
  }
}

// Run task prority on page load
updateTaskPriorities();