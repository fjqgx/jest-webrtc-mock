
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


//////////////// MediaSource ////////////////
export function mockWebAssembly(): void;

export function mockWebAssemblyClear(): void; 



//////////////// HTMLElement ////////////////
export function mockHTMLCanvasElement(): void;

export function mockHTMLCanvasElementClear(): void; 