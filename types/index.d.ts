declare global {
  interface RTCPeerConnection {
    // 支持Mock RTCPeerConnection返回的数据
    mockData (type: RTCPeerConnectionMockDataType, data: RTCSessionDescriptionInit): boolean;
  }
}

//////////////// RTCPeerConnection ////////////////
export const enum RTCPeerConnectionMockDataType {
  Offer = 1,
  Answer,
}

export function mockRTCPeerConnection(): void;

export function mockRTCPeerConnectionClear(): void;


//////////////// AudioContext ////////////////

export const enum MediaSourceMockDataType {
  Codec = 1,
} 

export function mockAudioContext(): void;

export function mockAudioContextClear(): void;


//////////////// MediaSource ////////////////
export function mockMediaSource(): void;

export function mockMediaSourceClear(): void;

export function mockMediaSourceSupportedCodecs(types: string[]): void;


//////////////// MediaSource ////////////////
export function mockWebAssembly(): void;

export function mockWebAssemblyClear(): void; 
