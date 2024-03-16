import { HTMLElement } from "./html";

export class HTMLDivElement extends HTMLElement {

  constructor() {
    super();
    this.type = "div";
  }

}

export function mockHTMLDivElement (): void {
  (global as any).HTMLDivElement = HTMLDivElement;
}

export function mockHTMLDivElementClear(): void {
  delete (global as any).HTMLDivElement;
}