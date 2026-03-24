import { attribute, CustomElement, define } from "../src/index.js";

@define("test-button")
class TestButton extends HTMLElement implements CustomElement {
  private icon = "";
  private buttonSize = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.innerHTML = `
      <style></style>
      <button id="button"></button>
    `;
  }

  @attribute("icon")
  setIcon(icon: string) {
    this.icon = icon;
  }

  @attribute("size")
  set size(buttonSize: string) {
    this.buttonSize = buttonSize;
  }

  getIcon() {
    return this.icon;
  }

  getSize() {
    return this.buttonSize;
  }
}
