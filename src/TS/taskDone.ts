import { tasks } from "./addNewTask";
export const taskDone = () => {
	const taskDoneBtn = document.querySelectorAll(".task-done-btn");
	taskDoneBtn.forEach(doneBtn => {
		doneBtn.addEventListener("click", () => {
			const parentElement = doneBtn.parentElement?.parentElement?.parentElement;
			console.log(parentElement);
			const taskName: HTMLParagraphElement | any = doneBtn.nextSibling;
			tasks.findIndex(task => {
				if (task?.id === parentElement?.id || task?.id === undefined) {
					task.done = true;
					doneBtn.classList.add("task-completed");
					taskName?.classList.add("task-completed");
				}
			});
		});
	});
};
