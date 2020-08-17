(function () {
    'use strict';

    /*! *****************************************************************************
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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /*
     web-component-decorator
     @copyright 2020 Edwin Martin
     @license MIT
     */
    const t=Symbol();function r(t,r){return n=>{customElements.define(t,n,r);}}function n(r){return function(n,o,e){const c=e.value?"value":"set";return n.constructor[t]?(n.constructor.observedAttributes.push(r),n.constructor[t].set(r,e[c])):(n.constructor.observedAttributes=[r],n.constructor[t]=new Map([[r,e[c]]])),n.attributeChangedCallback=function(r,o,e){n.constructor[t].get(r).call(this,e,o);},e}}

    /**
     * Demo of web-component-decorator
     *
     * Run `npm run demo` to compile the source.
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
            this.shadowRoot.getElementById("icon").setAttribute('src', `icons/${icon}-24px.svg`);
        }
    };
    __decorate([
        n("icon"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], MyButton.prototype, "setIcon", null);
    MyButton = __decorate([
        r("my-button"),
        __metadata("design:paramtypes", [])
    ], MyButton);

}());
//# sourceMappingURL=script.js.map
