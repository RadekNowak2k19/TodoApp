import {
	iconMoon,
	iconSun,
	bgMobileDark,
	bgDesktopDark,
	bgMobileLight,
	bgDekstopLight,
} from "../images";

const app = document.querySelector("#app");

// CreateBGElement
const bgTop: HTMLDivElement = document.createElement("div");
const bgTopImage: HTMLImageElement = document.createElement("img");

const bgBottom: HTMLDivElement = document.createElement("div");

bgTopImage.alt = "Beautiful view of the mountains";

bgTop.classList.add("top");
bgBottom.classList.add("bottom");

app?.appendChild(bgTop);
bgTop.appendChild(bgTopImage);
app?.appendChild(bgBottom);

let imageObserver;

const darkModeElement: HTMLDivElement | any =
	document.querySelector(".dark-mode-icon");
const darkModeIcon: HTMLImageElement | any = document.querySelector(
	".dark-mode-icon img"
);
const topElement: HTMLImageElement | any = document.querySelector(".top img");

const searchElement = document.querySelector(".search");
const taskElement = document.querySelector(".tasks-container");
const buttonsElement = document.querySelector(".buttons-container");
const bottomElement = document.querySelector(".bottom");

let theme = localStorage.getItem("theme") || "light";

darkModeElement?.addEventListener("click", () => {
	topElement.src = bgMobileDark;
	darkModeIcon.src = iconSun;
	searchElement?.classList.toggle("dark-mode");
	taskElement?.classList.toggle("dark-mode");
	buttonsElement?.classList.toggle("dark-mode");
	bottomElement?.classList.toggle("dark-mode");

	if (theme === "light") {
		darkModeIcon.src = iconSun;
		searchElement?.classList.add("dark-mode");
		taskElement?.classList.add("dark-mode");
		buttonsElement?.classList.add("dark-mode");
		bottomElement?.classList.add("dark-mode");

		imageObserver = new ResizeObserver(entries => {
			const [entry] = entries;
			entry.contentRect.width > 600
				? (bgTopImage.src = bgDesktopDark)
				: (bgTopImage.src = bgMobileDark);
		});
		imageObserver.observe(bgTop);
		theme = "dark";
	} else {
		darkModeIcon.src = iconMoon;
		searchElement?.classList.remove("dark-mode");
		taskElement?.classList.remove("dark-mode");
		buttonsElement?.classList.remove("dark-mode");
		bottomElement?.classList.remove("dark-mode");

		imageObserver = new ResizeObserver(entries => {
			const [entry] = entries;
			entry.contentRect.width > 600
				? (bgTopImage.src = bgDekstopLight)
				: (bgTopImage.src = bgMobileLight);
		});
		imageObserver.observe(bgTop);
		theme = "light";
	}
	localStorage.setItem("theme", theme);
});
if (theme !== "light") {
	darkModeIcon.src = iconSun;
	searchElement?.classList.add("dark-mode");
	taskElement?.classList.add("dark-mode");
	buttonsElement?.classList.add("dark-mode");
	bottomElement?.classList.add("dark-mode");

	imageObserver = new ResizeObserver(entries => {
		const [entry] = entries;
		entry.contentRect.width > 600
			? (bgTopImage.src = bgDesktopDark)
			: (bgTopImage.src = bgMobileDark);
	});
	imageObserver.observe(bgTop);
}
if (theme === "light") {
	imageObserver = new ResizeObserver(entries => {
		const [entry] = entries;
		entry.contentRect.width > 600
			? (bgTopImage.src = bgDekstopLight)
			: (bgTopImage.src = bgMobileLight);
	});
	imageObserver.observe(bgTop);
}
