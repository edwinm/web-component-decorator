export declare function define(
  name: string,
  options?: ElementDefinitionOptions
): (constructor: CustomElementConstructor) => void;
export declare function attribute(
  attr: string
): (
  target: CustomElement,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor
) => PropertyDescriptor;
export interface CustomElement {
  constructor: Function & {
    observedAttributes?: string[];
  };
  attributeChangedCallback?(
    attributeName: string,
    oldValue: string,
    newValue: string
  ): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}
