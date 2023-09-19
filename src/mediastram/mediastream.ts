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
}