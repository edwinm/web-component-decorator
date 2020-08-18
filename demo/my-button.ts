/* Replace "../dist/bundle.min" with "web-component-decorator" in your own project */
import { attribute, CustomElement, define } from "../dist/bundle.min";

/**
 * Demo of web-component-decorator
 *
 * Run `npm start` to see this demo in action.
 *
 * Run `npm run build-demo` to compile the source.
 */
@define("my-button")
class MyButton extends HTMLElement implements CustomElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
          <style>
            button {
              padding: 5px;
            }
            #icon {
              vertical-align: middle;
            }
          </style>

          <button id="button">
              <img id="icon" alt="" width="16" height="16">          
              <slot></slot>
          </button>
        `;
  }

  @attribute("icon")
  setIcon(icon: string, oldIcon: string) {
    this.shadowRoot.getElementById("icon").setAttribute('src', `icons/${icon}-24px.svg`);
  }
}
