/*
 web-component-decorator 1.1.1
 @copyright 2023 Edwin Martin
 @license MIT
 */

const attrSymbol = Symbol();

export function define(
  name: string,
  options?: ElementDefinitionOptions
): (constructor: CustomElementConstructor) => void {
  return (constructor: CustomElementConstructor) => {
    customElements.define(name, constructor, options);
  };
}

export function attribute(attr: string) {
  return function (
    target: CustomElement,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const prop = propertyDescriptor.value ? "value" : "set";

    const constructor =
      target.constructor as unknown as CustomElementConstructorType;

    if (constructor[attrSymbol]) {
      constructor.observedAttributes.push(attr);
      constructor[attrSymbol].set(attr, propertyDescriptor[prop]);
    } else {
      constructor.observedAttributes = [attr];
      constructor[attrSymbol] = new Map([[attr, propertyDescriptor[prop]]]);
    }

    target.attributeChangedCallback = function (attr, oldValue, newValue) {
      constructor[attrSymbol].get(attr).call(this, newValue, oldValue);
    };

    return propertyDescriptor;
  };
}

export interface CustomElement {
  constructor: Function;

  attributeChangedCallback?(
    attributeName: string,
    oldValue: string,
    newValue: string
  ): void;

  connectedCallback?(): void;

  disconnectedCallback?(): void;
}

export type CustomElementConstructorType = Function & {
  [index: symbol]: Map<string, any>;
  observedAttributes: string[];
};
