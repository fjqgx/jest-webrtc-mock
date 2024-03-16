import { WebGLRenderingContext } from "../webgl/webgl-rendering-context";


export class CanvasRenderingContext2D {
  constructor () {

  }

  public fillRect(x: number, y:number, width: number, height: number): void {

  }

  public clearRect(x: number, y: number, w: number, h: number): void {

  }

  public strokeRect(x: number, y: number, w: number, h: number): void {

  }
}



export class HTMLCanvasElement extends HTMLElement {

  protected canvasRenderingContext2D?: CanvasRenderingContext2D;

  protected webGLRenderingContext?: WebGLRenderingContext;

  constructor () {
    super();
  }

  testFun(str: "2d"): CanvasRenderingContext2D;
  testFun(num: "webgl"): WebGLRenderingContext;
  testFun(a: any): any {

  }

  getContext(contextId: "2d"): CanvasRenderingContext2D;
  getContext(contextId: "webgl"): WebGLRenderingContext;
  getContext(contextId: any): any {
    if (contextId === "webgl") {
      if (!this.webGLRenderingContext) {
        this.webGLRenderingContext = new WebGLRenderingContext();
      }
      return this.webGLRenderingContext;
    } else if (contextId === "2d") {
      if (!this.canvasRenderingContext2D) {
        this.canvasRenderingContext2D = new CanvasRenderingContext2D();
      }
      return this.canvasRenderingContext2D;
    } else {
      return null;
    }
  }

  // reverse(a: string): string;
  // reverse(a: string[]): string[];
  // reverse(a: string | string[]): string | string[] {
  //   return "";
  // }
} 

export function mockHTMLCanvasElement (): void {
  (global as any).HTMLCanvasElement = HTMLCanvasElement;
}

export function mockHTMLCanvasElementClear(): void {
  delete (global as any).HTMLCanvasElement;
}