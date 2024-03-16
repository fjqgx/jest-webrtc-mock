import { MediaStreamTrackType } from "../mediastram/config";
import { MediaStream } from "../mediastram/mediastream";
import { MediaStreamTrack } from "../mediastram/mediastreamtrack";

export class MediaStreamAudioDestinationNode {

  public stream?: MediaStream;

  constructor () {

  }

  public createAudioTrack(): void {
    this.stream = new MediaStream();
    let audioTrack: MediaStreamTrack = new MediaStreamTrack(MediaStreamTrackType.Audio);
    this.stream.addTrack(audioTrack);
  }

}