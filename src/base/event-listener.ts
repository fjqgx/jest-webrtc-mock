

interface EventMap {
  [event: string]: Function[];
}

export class EventListener {

  protected eventMap: EventMap = {};

  constructor () {

  }

  public addEventListener (event: string, callback: Function): void {
    if (this.eventMap[event]) {
      this.eventMap[event].push(callback);
    } else {
      this.eventMap[event] = [callback];
    }
  }

  public removeEventListener (event: string, callback: Function): void {
    if (this.eventMap[event]) {
      for (let i = 0; i < this.eventMap[event].length; ++i) {
        if (this.eventMap[event][i] === callback) {
          this.eventMap[event].splice(i, 1);
          break;
        }
      }
    }
  }
}