import { AudioContext } from "./audio-context"


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