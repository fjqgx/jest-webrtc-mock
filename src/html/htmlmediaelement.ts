import { HTMLElement } from "./html";

class TimeRagnes {

  constructor () {

  }

  get length(): number {
    return 100;
  }

  public start (): void {

  }

  public end (): number {
    return 100;
  }
}

export class HTMLMediaElement extends HTMLElement {

  protected timeRanges: TimeRagnes = new TimeRagnes();

  constructor () {
    super();
  }

  get buffered(): TimeRagnes {
    return this.timeRanges;
  }

  public play (): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  public load(): void {

  }

  public pause(): void {
    
  }
}