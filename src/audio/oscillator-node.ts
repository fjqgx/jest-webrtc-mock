import { MediaStreamAudioDestinationNode } from "./mediastream-audio-destination-node"

export class OscillatorNode {
  constructor () {

  }

  public connect(node: MediaStreamAudioDestinationNode): void {
    node.createAudioTrack();
  }
}