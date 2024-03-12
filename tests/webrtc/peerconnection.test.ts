
import { mockRTCPeerConnection, mockRTCPeerConnectionClear } from "../../src/webrtc/peerconnection";
import { RTCPeerConnectionMockDataType } from "../../types";


describe("test peerconnection", () => {

  beforeEach(() => {
    mockRTCPeerConnection();
  })

  afterEach(() => {
    mockRTCPeerConnectionClear();
  })

  test("no rtcpeerconnection", () => {
    mockRTCPeerConnectionClear();
    try {
      let pc = new RTCPeerConnection();
    } catch(err) {
      return;
    }
    // 运行到这里就是错误了
    expect(true).toBe(false);
  })

  test('mock rtcpeerconnection', () => {
    try {
      let pc = new RTCPeerConnection();
    } catch (err) {
      // 运行到这里就是错误了
      expect(true).toBe(false);
    }
  })

  test('mock rtcpeerconnection createoffer', () => {
    try {
      let pc = new RTCPeerConnection();
      pc.mockData(RTCPeerConnectionMockDataType.Offer, {
        type: "offer",
        sdp: "123"
      })
      if (pc.createDataChannel === undefined) {
        // 运行到这里就是错误了
        expect(1).toBe(0);
      }
      pc.createOffer().then((offer: RTCSessionDescriptionInit) => {

      })
    } catch (err) {
      // 运行到这里就是错误了
      expect(true).toBe(false);
    }
  })
})