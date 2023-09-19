import { MediaStreamTrackType } from "../mediastram/config";
import { MediaStreamTrack } from "../mediastram/mediastreamtrack";
import { RTPChannel } from "./rtpchannel";

export class RTCRtpSender extends RTPChannel {

  readonly track?: MediaStreamTrack;

  constructor(type: MediaStreamTrackType) {
    super();
    this.track = new MediaStreamTrack(type);
  }
}