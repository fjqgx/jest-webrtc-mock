import { MediaStreamTrackType } from "./config";
import { MediaStreamTrack } from "./mediastreamtrack";

export class MediaStream {

  protected audioTrack?: MediaStreamTrack;
  protected videoTrack?: MediaStreamTrack;

  constructor () {

  }

  public addTrack (track: MediaStreamTrack): void {
    if (track) {
      if (MediaStreamTrackType.Audio === track.kind) {
        this.audioTrack = track;
      } else if (MediaStreamTrackType.Video === track.kind) {
        this.videoTrack = track;
      }
    }
  }

  public getAudioTracks(): MediaStreamTrack[] {
    if (this.audioTrack) {
      return [this.audioTrack];
    } else {
      return [];
    }
  }

  public getVideoTracks(): MediaStreamTrack[] {
    if (this.videoTrack) {
      return [this.videoTrack];
    } else {
      return [];
    }
  }

  public getTracks(): MediaStreamTrack[] {
    let arr: MediaStreamTrack[] = [];
    if (this.videoTrack) {
      arr.push(this.videoTrack);
    }
    if (this.audioTrack) {
      arr.push(this.audioTrack);
    }
    return arr;
  }
}

/**
 * mock MediaStream and MediaStreamTrack
 */
export function mockMediaStream (): void {
  Object.defineProperty(window, "MediaStreamTrack", {
    configurable: true,
    writable: true,
    value: MediaStreamTrack
  })

  Object.defineProperty(window, "MediaStream", {
    configurable: true,
    writable: true,
    value: MediaStream,
  })
}

/**
 * remove mock MediaStream and MediaStreamTrack
 */
export function mockMediaStreamClear(): void {
  Object.defineProperty(window, "MediaStreamTrack", {
    configurable: true,
    writable: true,
    value: undefined
  })

  Object.defineProperty(window, "MediaStream", {
    configurable: true,
    writable: true,
    value: undefined,
  }) 
}