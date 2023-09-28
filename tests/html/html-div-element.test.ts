import { mockHtmlElement, mockHtmlElementClear } from "../../src"


describe("test div", () => {

  beforeEach(() => {
    mockHtmlElement();
  })

  afterEach(() => {
    mockHtmlElementClear();
  })

  test ("test div querySelector", () => {
    let div: HTMLDivElement = document.createElement('div');
    let video: HTMLVideoElement = document.createElement('video');
    div.appendChild(video);
    let video2 = div.querySelector('video');
    expect(video).toEqual(video2);
  })
})