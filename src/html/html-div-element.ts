import { HTMLElement } from "./html";


export class HTMLDivElement extends HTMLElement {

  constructor () {
    super();
    this.elementType = "DIV";
  }

  public querySelector(type: string): HTMLElement | null {
    if ('video' === type) {
      for (let i = 0; i < this.childArr.length; ++i) {
        if (this.childArr[i].tagName === "VIDEO") {
          return this.childArr[i];
        }
      }
    }
    return null;
  }

  public insertAdjacentHTML (): void {
    
  }
}