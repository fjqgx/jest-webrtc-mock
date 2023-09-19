
// mock MediaStream and MediaStreamTrack
export function mockMediaStream(): void;

// remove mock MediaStream and MediaStreamTrack
export function mockMediaStreamClear(): void;

// mock RTCPeerConnection
export function mockRTCPeerConnection(): void;

// remove mock RTCPeerConnection
export function mockRTCPeerConnectionClear(): void;

export type ProcessStatsDataFunction = (data: RTCStatsReport) => RTCStatsReport;