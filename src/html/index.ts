import { HTMLVideoElement } from "./html-video-element";
import { HTMLElement } from "./html";
import { HTMLCanvasElement } from "./html-canvas-element";
import { HTMLDivElement } from "./html-div-element";


// mock createElement support video、div、canvas
function createElement (type: string): HTMLElement | null {
  let element: HTMLElement | null = null;
  switch(type) {
    case 'video':
      element = new HTMLVideoElement();
      break; 

    case 'canvas':
      element = new HTMLCanvasElement();
      break;

    case 'div':
      element = new HTMLDivElement();
      break;

    default:
      break;
  }
  return element;
}


export function mockHtmlElement(): void {
  (document as any).createElement = createElement;
}

export function mockHtmlElementClear(): void {
  delete (document as any).createElement
}