import { MediaStreamTrackType } from "../mediastram/config";
import { MediaStreamTrack } from "../mediastram/mediastreamtrack";
import { RTPChannel } from "./rtpchannel";

export class RTCRtpSender extends RTPChannel {

  readonly track?: MediaStreamTrack;

  constructor(type: MediaStreamTrackType | MediaStreamTrack) {
    super();
    if (MediaStreamTrackType.Audio === type || MediaStreamTrackType.Video === type) {
      this.track = new MediaStreamTrack(type);
    } else {
      this.track = type;
    }
    
  }
}