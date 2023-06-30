export declare function define(name: string, options?: ElementDefinitionOptions): (constructor: CustomElementConstructor) => void;
export declare function attribute(attr: string): (target: CustomElement, propertyName: string, propertyDescriptor: PropertyDescriptor) => PropertyDescriptor;
export interface CustomElement {
    constructor: Function;
    attributeChangedCallback?(attributeName: string, oldValue: string, newValue: string): void;
    connectedCallback?(): void;
    disconnectedCallback?(): void;
}
export type CustomElementConstructorType = Function & {
    [index: symbol]: Map<string, any>;
    observedAttributes: string[];
};
