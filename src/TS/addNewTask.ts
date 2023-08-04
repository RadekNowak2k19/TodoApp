import { iconCheck, iconCross } from "../images";
import { removeTasks } from "./removeTask";
import { taskDone } from "./taskDone";
import { clearCompleted } from "./clearCompleted";
import { displayAllActiveCompleted } from "./displayActiveCompletedTask";
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

export const renderTask = (tasks: Task[]) => {
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

		// const parentElemnet = listElement;
		tasks.filter(task => {
			if (task.done === true && task.id === listElement.id) {
				taskDoneButton.classList.add("task-completed");
				taskName.classList.add("task-completed");
			}
		});

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
	renderTask(tasks);
	spanElement.innerText = String(tasks.length);
	inputElement.value = "";
	inputElement.focus();
	removeTasks();
	taskDone();
	clearCompleted();
	displayAllActiveCompleted();
};

addBtn?.addEventListener("click", (e: Event) => {
	e.preventDefault();
	renderNewTask();
});

window.addEventListener("keydown", e => {
	if (e.key === "Enter") renderNewTask();
	else return;
});
