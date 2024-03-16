import { OscillatorNode } from "./oscillator-node";
import { MediaStreamAudioDestinationNode } from "./mediastream-audio-destination-node";
import { GainNode } from "./gain-node";
import { AudioBufferSourceNode } from "./audiobuffer-source-node";
import { AudioBuffer } from "./audio-buffer";

export class AudioContext {

  protected oscillatorNode?: OscillatorNode;

  protected mediaStreamAudioDestinationNode?: MediaStreamAudioDestinationNode;

  protected audioBufferSourceNode?: AudioBufferSourceNode;

  protected gainNode?: GainNode;

  protected current_state: string = "running";

  protected current_time: number = 0;

  constructor () {

  }

  get stete(): string {
    return this.current_state;
  }

  get currentTime (): number {
    return this.current_time;
  }

  public close(): Promise<void> {
    return Promise.resolve();
  } 

  public createGain(): GainNode {
    if (!this.gainNode) {
      this.gainNode = new GainNode();
    }
    return this.gainNode;
  }

  public createMediaStreamDestination(mediaElement: HTMLMediaElement): MediaStreamAudioDestinationNode {
    if (!this.mediaStreamAudioDestinationNode) {
      this.mediaStreamAudioDestinationNode = new MediaStreamAudioDestinationNode();
    }
    return this.mediaStreamAudioDestinationNode;
  }

  public createOscillator(): OscillatorNode {
    if (!this.oscillatorNode) {
      this.oscillatorNode = new OscillatorNode();
    }
    return this.oscillatorNode;
  }
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioContext/createMediaStreamDestination) */
    // createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioContext/createMediaStreamSource) */
    // createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    // /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioContext/getOutputTimestamp) */
    // getOutputTimestamp(): AudioTimestamp;
    
  public resume(): Promise<void> {
    return Promise.resolve();
  }
   
  public suspend(): Promise<void> {
    return Promise.resolve();
  }

  public createBufferSource(): AudioBufferSourceNode {
    if (!this.audioBufferSourceNode) {
      this.audioBufferSourceNode = new AudioBufferSourceNode();
    }
    return this.audioBufferSourceNode;
  }

  public createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer {
    return new AudioBuffer();
  }
  

  public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {

  }
    
  public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {

  }
}

export function mockAudioContext(): void {
  (global as any).AudioContext = AudioContext;
}

export function mockAudioContextClear(): void {
  delete (global as any).AudioContext; 
}
