import { MediaStreamTrackType } from "../mediastram/config";
import { MediaStream } from "../mediastram/mediastream";
import { MediaStreamTrack } from "../mediastram/mediastreamtrack";
import { HTMLElement } from "./html"

export class CanvasRenderingContext2D {

  constructor() {

  }

  public fillRect(): void {

  }
}


export class HTMLCanvasElement extends HTMLElement {

  public width: number = 0;

  public height: number = 0;

  protected ctx: CanvasRenderingContext2D = new CanvasRenderingContext2D();
  
  constructor() {
    super();
    this.elementType = "CANVAS";
  }

  public getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  public captureStream(): MediaStream {
    let ms: MediaStream = new MediaStream();
    let videoTrack: MediaStreamTrack = new MediaStreamTrack(MediaStreamTrackType.Video);
    ms.addTrack(videoTrack);
    return ms;
  }

}