

export type ProcessStatsDataFunction = (data: RTCStatsReport) => RTCStatsReport;

export function mockVideoDecoder(supportDecoder: VideoDecoderConfig[]): void;