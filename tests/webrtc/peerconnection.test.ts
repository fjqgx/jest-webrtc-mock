
import { RTCPeerConnectionMockDataType, mockRTCPeerConnection, mockRTCPeerConnectionClear, mockRTCPeerConnectionData } from "../../src/webrtc/peerconnection";



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
      mockRTCPeerConnectionData(RTCPeerConnectionMockDataType.Offer, {
        type: "offer",
        sdp: "123"
      })

      let pc = new RTCPeerConnection();
      
      if (pc.createDataChannel === undefined) {
        // 运行到这里就是错误了
        expect(1).toBe(0);
      }
      pc.createOffer().then((offer: RTCSessionDescriptionInit) => {
        expect(offer.type).toBe("offer");
        expect(offer.sdp).toBe("123");
      })
    } catch (err) {
      // 运行到这里就是错误了
      expect(true).toBe(false);
    }
  })

  test ('mock rtcpeerconnection setRemoteDescription', () => {
    let pc = new RTCPeerConnection();
    pc.setRemoteDescription(new RTCSessionDescription({
      type: 'offer',
      sdp: "test sdp"
    })).then(() => {
      expect(0).toBe(0);
    }).catch((err: Error) => {
      expect(0).toBe(1);
    })
  })
})