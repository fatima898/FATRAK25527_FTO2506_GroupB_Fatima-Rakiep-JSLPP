// scripts/utils/localStorage.js
import { initialTasks } from "../../initialData.js";

/** Load tasks from storage */
export function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : initialTasks;
    } catch {
      // fallback to initialTasks if parsing fails
      localStorage.setItem("tasks", JSON.stringify(initialTasks));
      return initialTasks;
    }
  }
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}

/** Saves tasks to localStorage */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
