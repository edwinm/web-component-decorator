import * as assert from "assert";
import { attribute, CustomElement, define } from "../src";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

/**
 * Test framework used:
 * Mocha https://mochajs.org/
 * Assert https://nodejs.org/api/assert.html
 */

@define("test-button")
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

  @attribute("icon")
  setIcon(icon: string, oldIcon:string) {
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

describe("Web component decorator", () => {
  beforeEach(() => {
    document.body.innerHTML = "<test-button id='button'>Click me</test-button>";
  });

  it("Test attribute on function", () => {
    const button = document.getElementById("button");

    button.setAttribute("icon", "close");

    assert.equal((<any>button).getIcon(), "close");
  });

});
