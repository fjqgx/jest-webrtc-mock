import { MediaStreamTrackType } from "../mediastram/config";
import { MediaStream } from "../mediastram/mediastream";
import { MediaStreamTrack } from "../mediastram/mediastreamtrack";

export class MediaDevices {

  public getSupportedConstraints(): MediaTrackConstraints {
    return {};
  }

  public getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream> {
    return new Promise((resolve, reject) => {
      if (constraints && (constraints.audio || constraints.video)) {
        let ms: MediaStream = new MediaStream();
        if (constraints.audio) {
          ms.addTrack(new MediaStreamTrack(MediaStreamTrackType.Audio));
        }
        if (constraints.video) {
          ms.addTrack(new MediaStreamTrack(MediaStreamTrackType.Video));
        }
        resolve(ms);
      } else {
        reject({
          message: "ailed to execute 'getUserMedia' on 'MediaDevices': At least one of audio and video must be requested"
        })
      }
    })
  }
}

export function mockMediaDevices(): void {
  if (navigator) {
    Object.defineProperty(navigator, "mediaDevices", {
      configurable: true,
      writable: true,
      value: new MediaDevices(),
    })
  } else {
    class navigator {
      public static mediaDevices: MediaDevices = new MediaDevices();
    }
    Object.defineProperty(window, "navigator", {
      configurable: true,
      writable: true,
      value: navigator,
    })
  }
  
}

export function mockMediaDevicesClear(): void {
  if (navigator) {
    Object.defineProperty(navigator, "mediaDevices", {
      configurable: true,
      writable: true,
      value: undefined,
    })
  }
}