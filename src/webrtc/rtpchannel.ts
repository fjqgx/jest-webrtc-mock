// import { ProcessStatsDataFunction } from "../../types";
import { RTCStatsReport } from "./rtcstatsreport";

type ProcessStatsDataFunction = (data: RTCStatsReport) => RTCStatsReport;

export class RTPChannel {

  // protected dataArray?: any[];

  protected baseData?: RTCStatsReport;

  protected handleStatsDataFun?: ProcessStatsDataFunction;

  constructor () {
    
  }

  set handleStatsData(fun: Function | undefined) {
    this.handleStatsData = fun;
  }

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