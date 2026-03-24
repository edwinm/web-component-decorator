(function () {
  "use strict";

  /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
  }

  typeof SuppressedError === "function"
    ? SuppressedError
    : function (error, suppressed, message) {
        var e = new Error(message);
        return (
          (e.name = "SuppressedError"),
          (e.error = error),
          (e.suppressed = suppressed),
          e
        );
      };

  /*
     web-component-decorator
     @copyright 2023-2026 Edwin Martin
     @license MIT
     */
  const t = Symbol();
  function e(t, e) {
    return (n) => {
      customElements.define(t, n, e);
    };
  }
  function n(e) {
    return function (n, u, r) {
      const o = r.value ? "value" : "set",
        s = n.constructor;
      return (
        s[t]
          ? (s.observedAttributes.push(e), s[t].set(e, r[o]))
          : ((s.observedAttributes = [e]),
            (s[t] = new Map([[e, r[o]]])),
            (n.attributeChangedCallback = function (e, n, u) {
              s[t].get(e).call(this, u, n);
            })),
        r
      );
    };
  }

  /**
   * Demo of web-component-decorator
   *
   * Run `npm start` to see this demo in action.
   *
   * Run `npm run build-demo` to compile the source.
   */
  let MyButton = class MyButton extends HTMLElement {
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
    setIcon(icon, oldIcon) {
      this.shadowRoot
        .getElementById("icon")
        .setAttribute("src", `icons/${icon}-24px.svg`);
    }
  };
  __decorate([n("icon")], MyButton.prototype, "setIcon", null);
  MyButton = __decorate([e("my-button")], MyButton);
})();
//# sourceMappingURL=bundle.js.map
