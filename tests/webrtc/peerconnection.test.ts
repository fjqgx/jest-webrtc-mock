import { mockRTCPeerConnection, mockRTCPeerConnectionClear } from "../../src/webrtc/peerconnection";


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
    let pc = new RTCPeerConnection();
    
  })

  
})