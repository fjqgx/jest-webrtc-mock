
export class RTCStatsReport {

  protected data: any;

  constructor (data: any) {
    this.data = data;
  }

  public forEach(callback: Function): void {
    this.data.forEach((item:any) => {
      callback(item);
    })
  }
}