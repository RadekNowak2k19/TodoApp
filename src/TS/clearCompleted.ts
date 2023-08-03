import { tasks } from "./addNewTask";
export const clearCompleted = () => {
	const spanElement: HTMLSpanElement | any =
		document.querySelector(".items-left span");
	const clearCompletedButton: HTMLButtonElement | any =
		document.querySelector(".clear-completed");
	const ulList = document.querySelector(".tasks-list");
	const tasksList: any = ulList?.childNodes;
	clearCompletedButton.addEventListener("click", () => {
		if (tasksList.length === 0) return;
		tasksList?.forEach((taskElement: HTMLLIElement) => {
			tasks.filter((task, index) => {
				if (task?.done === true && task.id === taskElement.id) {
					tasks.splice(index, 1);
					taskElement.remove();
					spanElement.innerText = String(tasks.length);
				}
			});
		});
	});
};
clearCompleted();
