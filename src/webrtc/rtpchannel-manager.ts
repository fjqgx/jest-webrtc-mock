import { MediaStream } from "../mediastram/mediastream";
import { MediaStreamTrack } from "../mediastram/mediastreamtrack";
import { RTPChannel } from "./rtpchannel";
import { RTCRtpSender } from "./rtpsender";

export class RtpChannelManager {

  protected mediastream?: MediaStream;

  protected rtpChannelArr: RTPChannel[] = [];

  constructor () {

  }

 
  public addStream(mediastream: MediaStream): void {
    if (this.mediastream !== undefined) {
      console.error("RtpChannelManager mediastream is exist");
      return;
    }
    this.mediastream = mediastream;
    let arr: MediaStreamTrack[] = this.mediastream.getTracks();
    for (let i = 0; i < arr.length; ++i) {
      let sender: RTCRtpSender = new RTCRtpSender(arr[i]);
      this.rtpChannelArr.push(sender);
    }
  }

  public getChannels(): RTPChannel[] {
    return this.rtpChannelArr;
  }
}