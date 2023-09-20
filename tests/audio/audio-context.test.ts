import { mockAudioContext, mockAudioContextClear } from "../../src/audio/index";
import { mockMediaStream, mockMediaStreamClear } from "../../src/mediastram/mediastream";


describe("test audiocontext", () => {

  beforeEach(() => {
    mockAudioContext();
    mockMediaStream();
  })

  afterEach(() => {
    mockAudioContextClear();
    mockMediaStreamClear();
  })
  
  test("test no momck", () => {
    mockAudioContextClear();
    mockMediaStreamClear();
    try {
      new AudioContext();
    } catch(err) {
      return;
    }

    expect(0).toBe(1);
  })

  test ("test AudioContext", () => {
    const ctx: AudioContext = new AudioContext();
    const oscillator: OscillatorNode = ctx.createOscillator();
    const dst: MediaStreamAudioDestinationNode = ctx.createMediaStreamDestination();
    oscillator.connect(dst);
    const audioTrack: MediaStreamTrack = dst.stream.getAudioTracks()[0];
    audioTrack.stop();
  })
})