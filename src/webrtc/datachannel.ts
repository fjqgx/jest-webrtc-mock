import { EventListener } from "../base/event-listener";

export class RTCDataChannel extends EventListener {

  constructor () {
    super();
  }

  get readyState(): string {
    return 'open';
  }

  public send (): void {

  }

  public close (): void {

  }
}