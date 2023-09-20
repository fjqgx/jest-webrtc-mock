import { HTMLElement } from "./html";
import { HTMLVideoElement } from "./html-video-element";


export class HTMLDivElement extends HTMLElement {

  constructor () {
    super();
  }

  public querySelector(type: string): HTMLElement | null {
    if ('video' === type) {
      return new HTMLVideoElement();
    }
    return null;
  }

  public insertAdjacentHTML (): void {
    
  }
}