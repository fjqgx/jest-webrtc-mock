import { EventListener } from "../base/event-listener";
import { RTCRtpReceiver } from "./rtpreceiver";
import { RTCRtpSender } from "./rtpsender";
import { RTCDataChannel } from "./datachannel";

export const enum RTCPeerConnectionMockDataType {
  Offer = 1,
  Answer,
}

export class RTCPeerConnection extends EventListener {

  protected rtcRtpReceiverAudio?: RTCRtpReceiver;

  protected rtcRtpReceiverVideo?: RTCRtpReceiver;

  protected rtcRtpSenderAudio?: RTCRtpSender;

  protected rtcRtpSenderVideo?: RTCRtpSender;


  constructor (param: any) {
    super();
  }

  public createOffer(): Promise<RTCSessionDescriptionInit> {
    return new Promise((resolve, reject) => {
      let offer: RTCSessionDescriptionInit | null = moc_data.getData(RTCPeerConnectionMockDataType.Offer);
      if (offer) {
        resolve(offer)
      }
    })
  }

  public createAnswer(): Promise<RTCSessionDescriptionInit> {
    return new Promise((resolve, reject) => {
      let answer: RTCSessionDescriptionInit | null = moc_data.getData(RTCPeerConnectionMockDataType.Answer);
      if (answer) {
        resolve(answer)
      }
    })
  }

  public setLocalDescription(): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  public setRemoteDescription(): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  public createDataChannel (): RTCDataChannel {
    return new RTCDataChannel();
  }

  public addIceCandidate (): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  public close(): void {

  }

  public getReceivers(): RTCRtpReceiver[] {
    return []; 
  }

  public getSenders(): RTCRtpReceiver[] {
    return [];
  }

  public getStats(track: MediaStreamTrack): Promise<RTCStatsReport> {
    return new Promise((resolve, reject) => {

    })
  } 
}

class PeerconnectionMockData {

  private rtc_offer: RTCSessionDescriptionInit = {
    type: "offer",
    sdp: "",
  }
  
  private rtc_answer: RTCSessionDescriptionInit = {
    type: "answer",
    sdp: "",
  }

  constructor () {

  }

  public mock (type: RTCPeerConnectionMockDataType, data: RTCSessionDescriptionInit): boolean {
    if (type === RTCPeerConnectionMockDataType.Offer) {
      if (data.type === "offer" && data.sdp !== undefined && data.sdp.length > 0) {
        this.rtc_offer = data;
        return true;
      }
    } else if (type === RTCPeerConnectionMockDataType.Answer) {
      if (data.type === "answer" && data.sdp !== undefined && data.sdp.length > 0) {
        this.rtc_answer = data;
        return true;
      }
    }
    return false;
  }

  public getData (type: RTCPeerConnectionMockDataType): RTCSessionDescriptionInit | null {
    if (type === RTCPeerConnectionMockDataType.Offer) {
      return this.rtc_offer;
    } else if (type === RTCPeerConnectionMockDataType.Answer) {
      return this.rtc_answer;
    }
    return null;
  }

  public reset(): void {

  }
}

let moc_data: PeerconnectionMockData = new PeerconnectionMockData();

/**
 * mock支持RTCPeerConnection
 */
export function mockRTCPeerConnection(): void {
  (Window as any).RTCPeerConnection = RTCPeerConnection;
  (global as any).RTCPeerConnection = RTCPeerConnection;
}

export function mockRTCPeerConnectionClear(): void {
  delete (Window as any).RTCPeerConnection;
  delete (global as any).RTCPeerConnection;
}

export function mockRTCPeerConnectionData(type: RTCPeerConnectionMockDataType, data: RTCSessionDescriptionInit): boolean {
  return moc_data.mock(type, data);
}
