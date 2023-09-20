

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
