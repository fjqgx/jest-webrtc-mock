import { OscillatorNode } from "./oscillator-node";
import { MediaStreamAudioDestinationNode } from './mediastream-audio-destination-node';
import { GainNode } from "./gain-node";
export class AudioContext {

  constructor () {

  }

  public createOscillator(): OscillatorNode {
    return new OscillatorNode();
  }

  public createMediaStreamDestination(): MediaStreamAudioDestinationNode {
    return new MediaStreamAudioDestinationNode();
  }

  public createGain(): GainNode {
    return new GainNode();
  }

  public resume(): void {

  }

  public close (): void {
    
  }
}

export function mockAudioContext(): void {
  Object.defineProperty(window, 'AudioContext', {
    configurable: true,
    writable: true,
    value: AudioContext
  })
}

export function mockAudioContextClear(): void {
  Object.defineProperty(window, 'AudioContext', {
    configurable: true,
    writable: true,
    value: undefined
  })
}