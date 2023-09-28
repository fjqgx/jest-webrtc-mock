import { mockHtmlElement, mockHtmlElementClear, mockMediaStream, mockMediaStreamClear } from "../../src"
import { AutoPlayType, MockVideoFrameCallbackMetadata } from "../../types";


describe("test video", () => {

  beforeEach(() => {
    mockHtmlElement();
    mockMediaStream();
  })

  afterEach(() => {
    mockHtmlElementClear();
    mockMediaStreamClear();
  })

  test ("test video play suc", (done) => {
    let video: HTMLVideoElement = document.createElement('video');
    let ms: MediaStream = new MediaStream();
    video.srcObject = ms;
    video.addEventListener('loadeddata', () => {
      video.play().then(() => {
        expect(video.paused).toBe(false);
        done();
      }).catch((err) => {
        expect(0).toBe(1);
      })
    })
  })

  test ("test video play mute", (done) => {
    let video: HTMLVideoElement = document.createElement('video');
    video.setAutoPlayType(AutoPlayType.MutePlay);
    let ms: MediaStream = new MediaStream();
    video.srcObject = ms;
    video.play().then(() => {
      expect(0).toBe(1);
    }).catch(() => {
      expect(video.paused).toBe(true);
      video.muted = true;
      video.play().then(() => {
        expect(video.paused).toBe(false);
        done();
      }).catch(() => {
        expect(0).toBe(1);
      })
    })
  })

  test ("test video play not allowed", (done) => {
    let video: HTMLVideoElement = document.createElement('video');
    video.setAutoPlayType(AutoPlayType.PlayNotAllowed);
    let ms: MediaStream = new MediaStream();
    video.srcObject = ms;
    video.play().then(() => {
      expect(0).toBe(1);
    }).catch(() => {
      video.muted = true;
      video.play().then(() => {
        expect(0).toBe(1);
      }).catch(() => {
        done();
      })
    })
  })

  test ('test video support requestVideoFrameCallback', (done) => {

    let processVideoFrameCallbackMetadata = (mediadata: MockVideoFrameCallbackMetadata): void => {
      mediadata.presentedFrames += 1;
    }

    let requestRenderFrame = (): void => {
      if (video.requestVideoFrameCallback) {
        video.requestVideoFrameCallback((now: number, metadata: VideoFrameCallbackMetadata) => {
          if (metadata.presentedFrames > 10) {
            done();
          }
          requestRenderFrame();
        })
      } else {
        expect(0).toBe(1);
      }
    }

     let video: HTMLVideoElement = document.createElement('video');
     video.style.width = '100%';
     let metadata: MockVideoFrameCallbackMetadata = {
       expectedDisplayTime: 10000,
       height: 1920,
       mediaTime: 10000,
       presentationTime: 10000,
       presentedFrames: 1,
       width: 1080,
       delay: 33,
     }
     video.setSupportRequestVideoFrameCallback(0, metadata, processVideoFrameCallbackMetadata);
     requestRenderFrame();
  }, 1000)

  test ('test video not support requestVideoFrameCallback', (done) => {
    let video: HTMLVideoElement = document.createElement('video');
    if (video.requestVideoFrameCallback === undefined) {
      done();
    } else {
      expect(0).toBe(1);
    }
  })

  test ('test video support requestVideoFrameCallback', (done) => {
    let video: HTMLVideoElement = document.createElement('video');
    const now: number = 10000;
    let metadata: MockVideoFrameCallbackMetadata = {
      delay: 33,
      expectedDisplayTime: now,
      height: 1080,
      mediaTime: 1000,
      presentationTime: now,
      presentedFrames: 1,
      width: 1920,
    }
    let req = () => {
      if (video.requestVideoFrameCallback !== undefined) {
        video.requestVideoFrameCallback((now, metadata) => {
          // console.log("callback:", metadata);
          req();
        })
      } else {
        expect(0).toBe(1);
        done();
      }
    }
    video.setSupportRequestVideoFrameCallback(now, metadata, (mediadata: MockVideoFrameCallbackMetadata) => {
      // console.log("aaa", metadata);
      metadata.expectedDisplayTime += 33;
      metadata.presentationTime += 33;
      metadata.presentedFrames += 1;
    })
    setTimeout(() => {
      req();
    }, 500);

    setTimeout(() => {
      done();
    }, 1000)
    
  })
})


