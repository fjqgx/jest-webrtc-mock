import { EventListener } from "../base/event-listener";
import { RTCRtpReceiver } from "./rtpreceiver";
import { RTCRtpSender } from "./rtpsender";
import { RTCDataChannel } from "./datachannel";

export class RTCPeerConnection extends EventListener {

  protected rtcRtpReceiverAudio?: RTCRtpReceiver;

  protected rtcRtpReceiverVideo?: RTCRtpReceiver;

  protected rtcRtpSenderAudio?: RTCRtpSender;

  protected rtcRtpSenderVideo?: RTCRtpSender;

  constructor (param: any) {
    super();
  }

  public createOffer(): Promise<RTCSessionDescription> {
    return new Promise((resolv, reject) => {
      
    })
  }

  public createAnswer(): Promise<RTCSessionDescription> {
    return new Promise((resolve, reject) => {
      
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

/**
 * mock支持RTCPeerConnection
 */
export function mockRTCPeerConnection(): void {
  Object.defineProperty(window, "RTCPeerConnection", {
    configurable: true,
    writable: true,
    value: RTCPeerConnection,
  })
}

export function mockRTCPeerConnectionClear(): void {
  Object.defineProperty(window, "RTCPeerConnection", {
    configurable: false,
    writable: false,
    value: undefined,
  })
  
}