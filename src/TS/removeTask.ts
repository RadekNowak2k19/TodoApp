import { tasks, spanElement } from "./addNewTask";
export const removeTasks = () => {
	const removeTaskBtn = document.querySelectorAll(".remove-task");
	removeTaskBtn.forEach(removeBtn => {
		const parentElement = removeBtn.parentElement?.parentElement;
		removeBtn.addEventListener("click", () => {
			tasks.findIndex((task, index) => {
				if (task?.id === parentElement?.id || task?.id === undefined) {
					console.log("tak");
					parentElement?.remove();
					tasks.splice(index, 1);
					spanElement.innerText = tasks.length;
				}
			});
		});
	});
};
