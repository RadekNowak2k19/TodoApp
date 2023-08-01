import { bgDekstopLight, bgMobileLight } from "../images";
const app = document.querySelector("#app");

// CreateBGElement
const bgTop: HTMLDivElement = document.createElement("div");
const bgTopImage: HTMLImageElement = document.createElement("img");

const bgBottom: HTMLDivElement = document.createElement("div");

bgTopImage.alt = "Beautiful view of the mountains";

bgTop.classList.add("top");
bgBottom.classList.add("bottom");

const imageObserver = new ResizeObserver(entries => {
	const [entry] = entries;
	entry.contentRect.width > 600
		? (bgTopImage.src = bgDekstopLight)
		: (bgTopImage.src = bgMobileLight);
});
imageObserver.observe(bgTop);

app?.appendChild(bgTop);
bgTop.appendChild(bgTopImage);
app?.appendChild(bgBottom);
