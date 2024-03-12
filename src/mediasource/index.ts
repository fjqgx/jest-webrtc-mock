
let supportTypesArr: string[] = [];

export function mockMediaSourceSupportedCodecs(types: string[]): void {
  supportTypesArr = types;
}

export class MediaSource {

  static isTypeSupported(type: string): boolean {
    return supportTypesArr.includes(type);
  }
}


export function mockMediaSource (): void {
  (global as any).MediaSource = MediaSource;
}

export function mockMediaSourceClear(): void {
  delete (global as any).MediaSource;
}