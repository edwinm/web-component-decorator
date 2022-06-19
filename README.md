![test](https://github.com/edwinm/web-component-decorator/workflows/Test/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/edwinm/web-component-decorator/badge.svg?branch=master)](https://coveralls.io/github/edwinm/web-component-decorator?branch=master) [![CodeFactor](https://www.codefactor.io/repository/github/edwinm/web-component-decorator/badge)](https://www.codefactor.io/repository/github/edwinm/web-component-decorator) [![Size](https://img.shields.io/github/size/edwinm/web-component-decorator/dist/bundle.min.js)](https://github.com/edwinm/web-component-decorator/blob/master/dist/bundle.min.js) [![npm version](https://badge.fury.io/js/web-component-decorator.svg)](https://www.npmjs.com/package/web-component-decorator) [![GitHub](https://img.shields.io/github/license/edwinm/web-component-decorator.svg)](https://github.com/edwinm/web-component-decorator/blob/master/LICENSE)

# Web component decorator

> Lightweight TypeScript decorators for web components for easier handling of attribute changes and cleaner code

Replaces the web component functions `customElements.define(…)`, `observedAttributes()` and `attributeChangedCallback(…)` with decorators `@define(…)` and `@attribute(…)`.

Advantages over other solutions:

- Includes Typescript definitions
- Extend any HTML element
- Non opinionated
- Lightweight
- Cleaner code

## Installation

```bash
npm install --save-dev web-component-decorator
```

## Example

```ts
import { attribute, CustomElement, define } from "web-component-decorator";

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
    this.shadowRoot
      .getElementById("icon")
      .setAttribute("src", `icons/${icon}-24px.svg`);
  }
}
```

This example can be found in the `demo` directory in the repository.

## API

### Define custom element

### `@define(tagname [, options])`

#### Parameters

| Name    | Type              | Description                                                                                     |
| ------- | ----------------- | ----------------------------------------------------------------------------------------------- |
| tagname | string            | Name of the tag to use. Should include a '-' (minus)                                            |
| options | object (optional) | Object with the form `{ extends: string }`, where extends is the name of the HTML tag to extend |

Replacement for `customElements.define(tagname, classname, options)`.
To be put right above the class declaration of the web component.

### Observe attributes

### `@attribute(attributename)`

| Name          | Type   | Description           |
| ------------- | ------ | --------------------- |
| attributename | string | Name of the attribute |

Replacement for `observedAttributes()` and `attributeChangedCallback(…)`.

The decorated function has the following signature:

**`anyName(newValue: string, oldValue:string): void`** - Function to be called when an attributte changes, with the new and old value of the attribute.

A setter can also be decorated:

**`set anyName(value: string): void`** - Function to be called when an attributte changes, with the new value of the attribute.

### Interface

### `CustomElement`

Interface to implement to get access to the web component type definitions.

## experimentalDecorators

> **Note**
> In `tsconfig.json`, don't forget to add `"experimentalDecorators": true` to `compilerOptions`.

## License

Copyright 2020 [Edwin Martin](https://bitstorm.org/) and released under the MIT license.
