export default class TestItem extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		const template = document.getElementById("test-template");
		const content = template.content;

		const element = content.cloneNode(true);

		shadow.appendChild(element);
	}
}
