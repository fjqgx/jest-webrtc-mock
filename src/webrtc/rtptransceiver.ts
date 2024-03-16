import { MediaStream } from "../mediastram/mediastream";
import { RtpChannelManager } from "./rtpchannel-manager";
import { RTCRtpReceiver } from "./rtpreceiver";
import { RTCRtpSender } from "./rtpsender";

export enum TransceiverDirection {
  SendRecv = 'sendrecv',
  SendOnly = 'sendonly',
  RecvOnly = 'recvonly',
  Inactive = 'inactive',
}

export class RTCRtpTransceiver {

  protected id: number;

  protected direction: TransceiverDirection = TransceiverDirection.Inactive;

  protected mediastream?: MediaStream;

  protected sendChannelManager: RtpChannelManager = new RtpChannelManager();

  protected recvChannelManager: RtpChannelManager = new RtpChannelManager();

  constructor (mid: number) {
    this.id = mid;
  }

  public addStream (mediastream: MediaStream): void {
    this.mergeDirection(TransceiverDirection.SendOnly);
    this.sendChannelManager.addStream(mediastream);
  }

  public addTrack (direction: TransceiverDirection, mediastreamtrack?: MediaStreamTrack): void {
    this.mergeDirection(direction);
    if (TransceiverDirection.SendOnly === direction) {
      

    }
  }

  public getSenders(): RTCRtpSender[] {
    return this.sendChannelManager.getChannels();
  }

  public getReceivers(): RTCRtpReceiver[] {
    return this.recvChannelManager.getChannels();
  }

  protected mergeDirection (direction: TransceiverDirection): void {
    if (TransceiverDirection.Inactive === this.direction) {
      this.direction = direction;
    } else if (TransceiverDirection.RecvOnly === this.direction) {
      if (TransceiverDirection.SendOnly === direction || TransceiverDirection.SendRecv === direction) {
        this.direction = TransceiverDirection.SendRecv;
      }
    } else if (TransceiverDirection.SendOnly === this.direction) {
      if (TransceiverDirection.RecvOnly === direction || TransceiverDirection.SendRecv === direction) {
        this.direction = TransceiverDirection.SendRecv;
      }
    }
  }
}