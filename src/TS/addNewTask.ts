import { iconCheck, iconCross } from "../images";
const ulListElement = document.querySelector(".tasks-list");
export interface Task {
	name: string;
	done: boolean;
}
export const tasks: Task[] = [
	{
		name: "Example 1",
		done: false,
	},
	{
		name: "Example 2",
		done: false,
	},
];

const renderTask = () => {
	tasks.map(task => {
		const listElement: HTMLLIElement = document.createElement("li");
		const taskContainerElement: HTMLDivElement = document.createElement("div");
		const taskDoneElement: HTMLDivElement = document.createElement("div");
		const taskDoneButton: HTMLButtonElement = document.createElement("button");
		const iconCheckImage: HTMLImageElement = document.createElement("img");
		iconCheckImage.src = iconCheck;
		iconCheckImage.alt = "Icon check image";

		const taskName: HTMLParagraphElement = document.createElement("p");
		taskName.innerText = task.name;

		const removeTask: HTMLDivElement = document.createElement("div");
		const removeTaskIcon: HTMLImageElement = document.createElement("img");
		removeTaskIcon.src = iconCross;

		listElement.classList.add("list-item");
		taskContainerElement.classList.add("task");
		taskDoneElement.classList.add("task-done");
		taskDoneButton.classList.add("task-button", "task-done-btn");
		taskName.classList.add("task-name");
		removeTask.classList.add("remove-task");

		listElement.appendChild(taskContainerElement);
		taskContainerElement.appendChild(taskDoneElement);
		taskDoneElement.appendChild(taskDoneButton);
		taskDoneButton.appendChild(iconCheckImage);
		taskDoneElement.appendChild(taskName);
		taskContainerElement.appendChild(removeTask);
		removeTask.appendChild(removeTaskIcon);

		ulListElement?.appendChild(listElement);

		return listElement;
	});
};
renderTask();
