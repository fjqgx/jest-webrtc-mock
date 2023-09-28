import { AutoPlayType, MockVideoFrameCallbackMetadata, ProcessVideoFrameCallbackMetadata } from "../../types";
import { HTMLMediaElement } from "./html-media-element";

const enum HTMLVideoElementEvent {
  LoadedData = 'loadeddata',
}

export class HTMLVideoElement extends HTMLMediaElement {

  public requestVideoFrameCallback?: Function;

  protected isSupportRequestVideoFrameCallback: boolean = false;

  protected now: number = 0;
  protected mediaData?: MockVideoFrameCallbackMetadata;
  protected supportCallback?: ProcessVideoFrameCallbackMetadata;
  protected videoFrameMetadataCallback?: VideoFrameRequestCallback;
  
  constructor () {
    super();

    this.elementType = "VIDEO";
  }

  set srcObject(value: MediaStream | Blob | undefined) {
    this.playSrcObject = value;
    if (value) {
      setTimeout(() => {
        this.dispatchEvent(HTMLVideoElementEvent.LoadedData);
        if (this.autoplay) {
          this.play();
        }
      }, 0);
      
    } else {
      this.pauseState = true;
    }
  }

  get srcObject() {
    return this.playSrcObject;
  }

  public setAutoPlayType(type: AutoPlayType): void {
    super.setAutoPlayType(type);
  }

  public setSupportRequestVideoFrameCallback (now: number, mediadata: MockVideoFrameCallbackMetadata, callback?: ProcessVideoFrameCallbackMetadata): void {
    if (callback) {
      this.now = now;
      this.mediaData = mediadata;
      this.supportCallback = callback;
      this.requestVideoFrameCallback = (callback: VideoFrameRequestCallback): void => {
        this.videoFrameMetadataCallback = callback;
      }
      new Promise((resolve) => {
        this.excuteProcessVideoFrameCallback();
        resolve({});
      })
    } else {
      this.supportCallback = undefined;
      this.requestVideoFrameCallback = undefined;
    }
  }

  protected excuteProcessVideoFrameCallback (): void {
    if (this.mediaData && this.supportCallback) {
      this.supportCallback(this.mediaData);
      this.now += this.mediaData.delay;
      setTimeout(() => {
        this.excuteRequestVideoFrameCallback();
      }, this.mediaData.delay)
    }
  }

  protected excuteRequestVideoFrameCallback(): void {
    if (this.supportCallback) {
      if (this.videoFrameMetadataCallback) {
        let callback: VideoFrameRequestCallback = this.videoFrameMetadataCallback;
        this.videoFrameMetadataCallback = undefined;
        callback(this.now, this.getVideoFrameCallbackMetadata());
      } 
      this.excuteProcessVideoFrameCallback();
    }
  }

  private getVideoFrameCallbackMetadata(): VideoFrameCallbackMetadata {
    let data: any = {};
    for (let key in this.mediaData) {
      if (key !== 'delay') {
        //@ts-ignore
        data[key] = this.mediaData[key];
      }
    }
    return data as VideoFrameCallbackMetadata;
  }
}