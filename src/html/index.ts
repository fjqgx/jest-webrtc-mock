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
  Object.defineProperty(document, 'createElement', {
    configurable: true,
    writable: true,
    value: createElement
  })
}

export function mockHtmlElementClear(): void {
  Object.defineProperty(document, 'createElement', {
    configurable: true,
    writable: true,
    value: undefined
  })
}