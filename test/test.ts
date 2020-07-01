import * as assert from "assert";
import { attribute, CustomElement, define } from "../src";
import doc = Mocha.reporters.doc;

/**
 * Test framework used:
 * Mocha https://mochajs.org/
 * Assert https://nodejs.org/api/assert.html
 */

// @define("test-button")
class TestButton extends HTMLElement implements CustomElement {
  private icon = "";
  private buttonSize = "";

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
          <style>
    
          </style>
          
          <button id="button">
          </button>
        `;
  }

  // @attribute("icon")
  setIcon(icon: string, oldIcon:string) {
    this.icon = icon;
  }

  // @attribute("size")
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
customElements.define("test-button", TestButton);

describe("Web component decorator", () => {
  beforeEach(() => {
    // const button = document.createElement("test-button");
    // button.textContent = "Click me";
    // button.id = "button";
    // document.body.appendChild(button);

    // document.body.innerHTML = "<test-button id='button'>Click me</test-button>";

    const button = new TestButton();
    document.body.appendChild(button);

  });

  it("Test attribute on function", () => {
    // const button = document.getElementById("button");
    const button = new TestButton();

    button.setAttribute("icon", "close");

    assert.equal((<TestButton>button).getIcon(), "close");
  });

});
