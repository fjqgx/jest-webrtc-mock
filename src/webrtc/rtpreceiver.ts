import { MediaStreamTrackType } from "../mediastram/config";
import { MediaStreamTrack } from "../mediastram/mediastreamtrack"
import { RTPChannel } from "./rtpchannel";

export class RTCRtpReceiver extends RTPChannel {

  readonly track?: MediaStreamTrack;

  constructor (type: MediaStreamTrackType) {
    super();
    this.track = new MediaStreamTrack(type);
  }
}

export function mockRTCRTPReceiver () {
  Object.defineProperty(window, "RTCRtpReceiver", {
    configurable: true,
    writable: true,
    value: RTCRtpReceiver,
  })
}

export function mockRTCRTPReceiverClear(): void {
  Object.defineProperty(window, "RTCRtpReceiver", {
    configurable: false,
    writable: false,
    value: undefined,
  })
}