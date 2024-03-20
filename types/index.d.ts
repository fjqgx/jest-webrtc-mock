
//////////////// RTCPeerConnection ////////////////
export const enum RTCPeerConnectionMockDataType {
  Offer = 1,
  Answer,
}

export function mockRTCPeerConnection(): void;

export function mockRTCPeerConnectionClear(): void;

export function mockRTCPeerConnectionData(type: RTCPeerConnectionMockDataType, data: RTCSessionDescriptionInit): boolean


//////////////// AudioContext ////////////////

export function mockAudioContext(): void;

export function mockAudioContextClear(): void;


//////////////// MediaSource ////////////////
export function mockMediaSource(): void;

export function mockMediaSourceClear(): void;

export function mockMediaSourceSupportedCodecs(types: string[]): void;


//////////////// WebAssembly ////////////////
export function mockWebAssembly(): void;

export function mockWebAssemblyClear(): void; 



//////////////// HTMLElement ////////////////
// mock createElement(support div、canva、video)
export function mockHtmlElement(): void;

// remove mock createElement(support div、canva、video)
export function mockHtmlElementClear(): void;


//////////////// Device ////////////////
// mock navigator.mediaDevices
export function mockMediaDevices(): void;

// remove mock navigator.mediaDevices
export function mockMediaDevicesClear(): void;


//////////////// MediaStream ////////////////
// mock MediaStream and MediaStreamTrack
export function mockMediaStream(): void;

// remove mock MediaStream and MediaStreamTrack
export function mockMediaStreamClear(): void;



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

  interface RTCPeerConnection {
    addStream(mediastream: MediaStream):void;
  }

  interface RTCRtpReceiver {
    setProcessStatsDataCallback(report: RTCStatsReport, callback: ProcessStatsDataFunction): void;
  }

  interface RTCRtpSender {
    setProcessStatsDataCallback(report: RTCStatsReport, callback: ProcessStatsDataFunction): void;
  }
}


export interface MockVideoFrameCallbackMetadata extends VideoFrameCallbackMetadata {
  delay: number;    // next frame interval(ms)
}

// requestVideoFrameCallback之前回调处理mediadata数据
export type ProcessVideoFrameCallbackMetadata = (mediadata: MockVideoFrameCallbackMetadata) => void;

// getStats之前回调处理RTCStatsReport数据
export type ProcessStatsDataFunction = (data: RTCStatsReport) => void;

