// scripts/ui/render.js
import { createTaskElement } from "./taskElement.js";

// Get task container by status 
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/** Clear existing tasks  
 * - remove all task cards from task container on the page 
 * - clearing the board before re-rendering 
*/
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((c) => (c.innerHTML = ""));
}

/** Update task count in headers for TODO, DOING and DONE columns */
export function updateColumnCounts(tasks) {
  const counts = {
    todo: tasks.filter((t) => t.status === "todo").length,
    doing: tasks.filter((t) => t.status === "doing").length,
    done: tasks.filter((t) => t.status === "done").length,
  };
  const toDoText = document.getElementById("toDoText");
  const doingText = document.getElementById("doingText");
  const doneText = document.getElementById("doneText");
  if (toDoText) toDoText.textContent = `TODO (${counts.todo})`;
  if (doingText) doingText.textContent = `DOING (${counts.doing})`;
  if (doneText) doneText.textContent = `DONE (${counts.done})`;
}

/**
 * Renders tasks into columns by stauts
 * - priority sorting (high, medium and low)
 */
export function renderTasks(tasks) {
  const statuses = ["todo", "doing", "done"];
  const priorityOrder = { high: 0, medium: 1, low: 2 };

  statuses.forEach((s) => {
    const container = getTaskContainerByStatus(s);
    if (!container) return;
    container.innerHTML = "";

    const toRender = tasks
      .filter((t) => t.status === s)
      .sort((a, b) => (priorityOrder[a?.priority?.toLowerCase()] ?? 3) - (priorityOrder[b?.priority?.toLowerCase()] ?? 3));

    toRender.forEach((task) => container.appendChild(createTaskElement(task)));
  });

  updateColumnCounts(tasks);
}
