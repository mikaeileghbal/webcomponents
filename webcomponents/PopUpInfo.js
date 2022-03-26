export default class PopUpInfo extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		const wrapper = document.createElement("span");
		wrapper.setAttribute("class", "wrapper");

		const icon = document.createElement("span");
		icon.setAttribute("class", "icon");
		icon.setAttribute("tabinbdex", 0);

		const info = document.createElement("span");
		info.setAttribute("class", "info");

		const text = this.getAttribute("data-text");
		info.textContent = text;

		const img = document.createElement("img");
		img.src = this.hasAttribute("img")
			? this.getAttribute("img")
			: "imh/default.png";

		icon.appendChild(img);

		const style = document.createElement("style");
		style.textContent = `
       .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 250px;
        display: inline-block;
        padding: 10px;
        background: white;
        border-radius: 4px;
        color:black;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        top: 35px;
        right: -20px;
        z-index: 3;
        box-shadow:0 4px 8px rgba(0,0,0,0.2);
      }
      .info::before{
        content: "";
        position: absolute;
        top: -20px;
        right: 20px;
        margin-left: -5px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent white transparent;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }  
    `;

		shadow.appendChild(style);
		shadow.appendChild(wrapper);
		wrapper.appendChild(icon);
		wrapper.appendChild(info);
	}
}
