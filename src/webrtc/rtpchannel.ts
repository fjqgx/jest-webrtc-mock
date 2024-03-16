
import { ProcessStatsDataFunction } from "../../types";

export class RTPChannel {

  protected baseData?: RTCStatsReport;

  protected handleStatsDataFun?: ProcessStatsDataFunction;

  constructor () {
    
  }

  public setProcessStatsDataCallback(report: RTCStatsReport, callback: ProcessStatsDataFunction): void {
    this.baseData = report;
    this.handleStatsDataFun = callback;
  }

  // set handleStatsData(fun: Function | undefined) {
  //   this.handleStatsData = fun;
  // }

  public getStats(): Promise<RTCStatsReport> {
    return new Promise((resolve) => {
      if (this.baseData !== undefined) {
        if (this.handleStatsDataFun) {
          this.handleStatsDataFun(this.baseData);
        }
        resolve(this.baseData);
      } else {
        // @ts-ignore
        resolve([]);
      }
    })
  }
}