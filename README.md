![test](https://github.com/edwinm/web-component-decorator/workflows/Test/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/edwinm/web-component-decorator/badge.svg?branch=master)](https://coveralls.io/github/edwinm/web-component-decorator?branch=master) [![CodeFactor](https://www.codefactor.io/repository/github/edwinm/web-component-decorator/badge)](https://www.codefactor.io/repository/github/edwinm/web-component-decorator) [![Size](https://img.badgesize.io/edwinm/web-component-decorator/master/dist/bundle.min.js?compression=gzip)](https://github.com/edwinm/web-component-decorator/blob/master/dist/bundle.min.js) [![npm version](https://badge.fury.io/js/web-component-decorator.svg)](https://www.npmjs.com/package/web-component-decorator) [![GitHub](https://img.shields.io/github/license/edwinm/web-component-decorator.svg)](https://github.com/edwinm/web-component-decorator/blob/master/LICENSE)

# Web component decorator

> Lightweight decorators for web components

## Installation

```bash
npm install --save-dev web-component-decorator
```

## Usage
```ts
import { attribute, CustomElement, define } from "web-component-decorator";

@define("test-button")
class TestButton extends HTMLElement implements CustomElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
          <button id="button">
              <span id="icon"></span>          
              <slot></slot>
          </button>
        `;
  }

  @attribute("icon")
  setIcon(icon: string, oldIcon: string) {
    this.shadowRoot.getElementById("icon").classList.add(icon);
  }
}
```



