

export class VideoDecoder {

  readonly state: CodecState = 'unconfigured';

  readonly decodeQueueSize: number = 0;

  protected init: VideoDecoderInit;

  // for test
  public static supportVideoDeocderConfigArr: VideoDecoderConfig[] = [];

  constructor (init:VideoDecoderInit) {
    this.init = init;
  }

  public static isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport> {
    return new Promise((resolve, reject) => {
      let result: VideoDecoderSupport = {
        supported: false,
        config
      }
      let supportVideoDecoderConfig: VideoDecoderConfig;
      for (let i = 0; i < VideoDecoder.supportVideoDeocderConfigArr.length; ++i) {
        supportVideoDecoderConfig = VideoDecoder.supportVideoDeocderConfigArr[i];
        if (supportVideoDecoderConfig.codec === config.codec 
          && (config.hardwareAcceleration === undefined || config.hardwareAcceleration === supportVideoDecoderConfig.hardwareAcceleration)) {
            result.supported = true;
            break;
          }
      }
      resolve(result);
    })
  }
}

export function mockVideoDecoder (supportDecoder: VideoDecoderConfig[]): void {
  VideoDecoder.supportVideoDeocderConfigArr = supportDecoder;
  (global as any).VideoDecoder = VideoDecoder;
} 

export function mockVideoDecoderClear (supportDecoder: VideoDecoderConfig[]): void {
  delete (global as any).VideoDecoder;
}