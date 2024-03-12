import { mockMediaSource, mockMediaSourceClear, mockMediaSourceSupportedCodecs } from "../../src/mediasource";

describe("test peerconnection", () => {

  beforeEach(() => {
    mockMediaSource();
  })

  afterEach(() => {
    mockMediaSourceClear();
  })

  test("no MediaSource", () => {
    mockMediaSourceClear();
    if (!!window.MediaSource) {
      // 运行到这里就是错误了
      expect(0).toBe(1);
    } else {
      expect(1).toBe(1)
    }
  })

  test('mock MediaSource', () => {
    if (!!window.MediaSource) {
      expect(1).toBe(1);
    } else {
      expect(0).toBe(1)
    }
  })

  test('mock rtcpeerconnection createoffer', () => {
    const codec: string = "111";
    expect(MediaSource.isTypeSupported(codec)).toBe(false);
    mockMediaSourceSupportedCodecs([codec]);
    expect(MediaSource.isTypeSupported(codec)).toBe(true);
  })
})