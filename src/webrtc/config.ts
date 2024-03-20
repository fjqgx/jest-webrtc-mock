
export class RTCSessionDescription {
  public type: string;
  public sdp: string;
  
  constructor (session: {type: string, sdp: string}) {
    this.type = session.type;
    this.sdp = session.sdp;
  }
}