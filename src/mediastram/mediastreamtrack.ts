import { EventListener } from "../base/event-listener";
import { MediaStreamTrackType } from "./config";

export class MediaStreamTrack extends EventListener {

  protected type: MediaStreamTrackType;

  constructor (type: MediaStreamTrackType) {
    super();
    this.type = type;
  }

  get kind (): MediaStreamTrackType {
    return this.type;
  }

  public getSettings() {
    return null;
  }

  public stop (): void {

  }
}