

// mock AudioContext
export function mockAudioContext(): void;

// remove mock AudioContext
export function mockAudioContextClear(): void;

// mock createElement(support div、canva、video)
export function mockHtmlElement(): void;

// remove mock createElement(support div、canva、video)
export function mockHtmlElementClear(): void;

// mock navigator.mediaDevices
export function mockMediaDevices(): void;

// remove mock navigator.mediaDevices
export function mockMediaDevicesClear(): void;

// mock MediaStream and MediaStreamTrack
export function mockMediaStream(): void;

// remove mock MediaStream and MediaStreamTrack
export function mockMediaStreamClear(): void;

// mock RTCPeerConnection
export function mockRTCPeerConnection(): void;

// remove mock RTCPeerConnection
export function mockRTCPeerConnectionClear(): void;


export declare class RTCPeerConnection {

  public getSenders(): RTCRtpSender[]

  public getReceivers(): RTCRtpReceiver[];
}


/**
 * HTMLVideoElement
 */
export const enum AutoPlayType {
  AutoPlay = 1,   // auto play 
  MutePlay,       // auto play with muted
  PlayNotAllowed, // can not auto play
}

declare global {
  interface HTMLVideoElement {
    /** set autoplay policy */
    setAutoPlayType(type: AutoPlayType): void;

    setSupportRequestVideoFrameCallback (now: number, mediadata: MockVideoFrameCallbackMetadata, callback: ProcessVideoFrameCallbackMetadata): void;
  }
}

export interface MockVideoFrameCallbackMetadata extends VideoFrameCallbackMetadata {
  delay: number;    // next frame interval(ms)
}

export type ProcessVideoFrameCallbackMetadata = (mediadata: MockVideoFrameCallbackMetadata) => void;
