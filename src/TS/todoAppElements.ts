import { iconMoon } from "../images";
const app = document.querySelector("#app");
const appContainer: HTMLDivElement = document.createElement("div");

const renderButtonElement = (text: string) => {
	const buttonElement: HTMLButtonElement = document.createElement("button");
	buttonElement.classList.add("button-opacity");
	buttonElement.innerText = text;

	return buttonElement;
};

// XXXXXXXXX
// LogoColorElement
// XXXXXXXXX
const logoColorElement: HTMLDivElement = document.createElement("div");
const logoElement: HTMLSpanElement = document.createElement("span");
const darkLightModeElement: HTMLDivElement = document.createElement("div");
const darkLightModeImageElement: HTMLImageElement =
	document.createElement("img");

logoElement.innerText = "T O D O";
darkLightModeImageElement.src = iconMoon;

// XXXXXXXXX
// SearchElement
// XXXXXXXXX
const searchElement: HTMLDivElement = document.createElement("div");
const inputElement: HTMLInputElement = document.createElement("input");
inputElement.type = "text";
inputElement.placeholder = "Create a new todo...";

// XXXXXXXXX
// addTaskButton
// XXXXXXXXX
const addTaskButton: HTMLButtonElement = document.createElement("button");

// XXXXXXXXX
// Tasks
// XXXXXXXXX
const tasksContainerElement: HTMLDivElement = document.createElement("div");
export const tasksListElement: HTMLUListElement = document.createElement("ul");

// XXXXXXXXX
// TasksCounter
// XXXXXXXXX
const tasksCounterElement: HTMLDivElement = document.createElement("div");
const counterElement: HTMLDivElement = document.createElement("div");
const counterParagraphElement: HTMLParagraphElement =
	document.createElement("p");
const spanElement: HTMLSpanElement = document.createElement("span");

counterParagraphElement.innerText = "items left";

// XXXXXXXXX
// Buttons
// XXXXXXXXX
const buttonsContainerElement: HTMLDivElement = document.createElement("div");

// XXXXXXXXX
// DragText
// XXXXXXXXX
const dragText: HTMLParagraphElement = document.createElement("p");
dragText.innerText = "Drag and drop to reorder list";
// XXXXXXXXX
// Class/ID
// XXXXXXXXX
appContainer.classList.add("app-container");
logoColorElement.classList.add("logo-color");
searchElement.classList.add("search");
addTaskButton.classList.add("add-btn", "task-button");
tasksContainerElement.classList.add("tasks-container");
tasksListElement.classList.add("tasks-list");
tasksCounterElement.classList.add("tasks-counter");
counterElement.classList.add("items-left");
buttonsContainerElement.classList.add("buttons-container");
dragText.classList.add("drag-text");

// XXXXXXXXX
// Append
// XXXXXXXXX
app?.appendChild(appContainer);

appContainer.appendChild(logoColorElement);
logoColorElement.appendChild(logoElement);
logoColorElement.appendChild(darkLightModeElement);
darkLightModeElement.appendChild(darkLightModeImageElement);

appContainer.appendChild(searchElement);
searchElement.appendChild(inputElement);
searchElement.appendChild(addTaskButton);

appContainer.appendChild(tasksContainerElement);
tasksContainerElement.appendChild(tasksListElement);
tasksContainerElement.appendChild(tasksCounterElement);
tasksCounterElement.appendChild(counterElement);
counterElement.appendChild(spanElement);
counterElement.appendChild(counterParagraphElement);
tasksCounterElement.appendChild(renderButtonElement("Clear Completed"));

appContainer.appendChild(buttonsContainerElement);
buttonsContainerElement.appendChild(renderButtonElement("All"));
buttonsContainerElement.appendChild(renderButtonElement("Active"));
buttonsContainerElement.appendChild(renderButtonElement("Completed"));

appContainer.appendChild(dragText);
