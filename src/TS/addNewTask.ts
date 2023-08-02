import { iconCheck, iconCross } from "../images";
import { removeTasks } from "./removeTask";
const ulListElement: any = document.querySelector(".tasks-list");
const inputElement: any = document.querySelector("input[type='text']");
const addBtn = document.querySelector(".add-btn");
export const spanElement: HTMLElement | any =
	document.querySelector(".items-left span");
export interface Task {
	name: string;
	done: boolean;
	id?: string | any;
}
export const tasks: Task[] = [
	// {
	// 	name: "Example 1",
	// 	done: false,
	// 	id: "id-0-Example-1",
	// },
	// {
	// 	name: "Example 2",
	// 	done: false,
	// 	id: "id-1-Example-2",
	// },
];
const joinTaskName = (task: string) => {
	const taskName = task.split(" ").join("-");
	return taskName;
};

const renderTask = () => {
	ulListElement.innerHTML = "";
	tasks.map(task => {
		const listElement: HTMLLIElement = document.createElement("li");
		const taskContainerElement: HTMLDivElement = document.createElement("div");
		const taskDoneElement: HTMLDivElement = document.createElement("div");
		const taskDoneButton: HTMLButtonElement = document.createElement("button");
		const iconCheckImage: HTMLImageElement = document.createElement("img");

		listElement.id = task.id;

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
const listElement = document.querySelector(".list-item");
console.log(listElement);
spanElement.innerText = String(tasks.length);

const addTask = (taskName: string) => {
	tasks.push({
		name: taskName,
		done: false,
		id: `id-${tasks.length}-${joinTaskName(taskName)}`,
	});
};

const renderNewTask = () => {
	if (inputElement.value.trim() === "") return;

	addTask(inputElement.value);
	renderTask();
	spanElement.innerText = String(tasks.length);
	inputElement.value = "";
	inputElement.focus();
	console.log(tasks);
	console.log(tasks.length);
	removeTasks();
};

addBtn?.addEventListener("click", (e: Event) => {
	e.preventDefault();
	renderNewTask();
});

window.addEventListener("keydown", e => {
	if (e.key === "Enter") renderNewTask();
	else return;
});
