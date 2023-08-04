import { renderTask, tasks, Task } from "./addNewTask";
import { removeTasks } from "./removeTask";
import { taskDone } from "./taskDone";
import { clearCompleted } from "./clearCompleted";

let activeTasks;
let completedTasks;

const init = (task: Task[]) => {
	renderTask(task);
	removeTasks();
	taskDone();
	clearCompleted();
};

export const displayAllActiveCompleted = () => {
	const buttons = document.querySelectorAll(".buttons-container button");
	const renderActive = () => {
		activeTasks = tasks.filter(task => {
			return task.done === false;
		});
		init(activeTasks);
	};
	const renderCompleted = () => {
		completedTasks = tasks.filter(task => {
			return task.done === true;
		});
		init(completedTasks);
	};
	const renderAll = () => init(tasks);

	buttons.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			buttons.forEach(btn => {
				btn.classList.remove("button-active");
			});
			if (index === 0) renderAll();
			if (index === 1) renderActive();
			if (index === 2) renderCompleted();

			btn.classList.add("button-active");
		});
	});
};
