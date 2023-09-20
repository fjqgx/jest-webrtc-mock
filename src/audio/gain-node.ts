import { AudioParam } from "./audio-param";

export class GainNode {

  protected param: AudioParam = new AudioParam();

  constructor () {

  }

  get gain(): AudioParam {
    return this.param;
  }

  public connect(): void {
    
  }
}