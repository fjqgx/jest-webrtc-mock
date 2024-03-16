import { AutoPlayType } from "../../types";
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

  public muted: boolean = false

  public autoplay: boolean = false;

  public volume: number = 1;

  protected playSrcObject?: MediaStream | Blob;

  protected timeRanges: TimeRagnes = new TimeRagnes();

  protected pauseState: boolean = true;

  protected autoPlayType: AutoPlayType = AutoPlayType.AutoPlay;

  constructor () {
    super();
  }

  get paused() {
    return this.pauseState;
  }

  get buffered(): TimeRagnes {
    return this.timeRanges;
  }


  public setAutoPlayType(type: AutoPlayType): void {
    this.autoPlayType = type;
  }


  public play (): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.playSrcObject) {
        if (AutoPlayType.AutoPlay === this.autoPlayType) {
          this.pauseState = false;
          resolve();
        } else if (AutoPlayType.MutePlay === this.autoPlayType) {
          if (this.muted) {
            this.pauseState = false;
            resolve();
          } else {
            this.pauseState = true;
            reject({
              message: 'not muted'
            })
          }
        } else {
          this.pauseState = true;
          reject({
            message: 'play not allowed'
          })
        }
      } else {
        this.pauseState = true;
        reject({
          message: 'no srcObject'
        })
      }
    })
  }

  public load(): void {

  }

  public pause(): void {
    this.pauseState = true;
  }
}