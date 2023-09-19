import { mockMediaDevices, mockMediaDevicesClear } from "../../src/navigator/mediadevices";

describe('test mediadevices', () => {

  beforeEach(() => {
    mockMediaDevices();
  })

  afterEach(() => {
    mockMediaDevicesClear();
  })

  test ('test mediadevices audio', (done) => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({audio: true}).then((mediastream: MediaStream) => {
        expect(mediastream.getAudioTracks().length).toBe(1);
        expect(mediastream.getVideoTracks().length).toBe(0);
        done();
      }).catch((err) => {
        expect(0).toBe(1);
      })
    } else {
      expect(0).toBe(1);
    }
  })

  test ("no mediadevices", (done) => {
    mockMediaDevicesClear();
    if (navigator && navigator.mediaDevices) {
      expect(0).toBe(1);
    } else {
      done();
    }
  })

  test('test mediadevices video', (done) => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({video: true}).then((mediastream: MediaStream) => {
        expect(mediastream.getAudioTracks().length).toBe(0);
        expect(mediastream.getVideoTracks().length).toBe(1);
        done();
      }).catch((err) => {
        expect(0).toBe(1);
      })
    } else {
      expect(0).toBe(1);
    }
  })
})