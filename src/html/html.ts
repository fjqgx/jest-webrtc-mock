import { EventListener } from "../base/event-listener";

export class CSSStyleDeclaration {

  public width: string = '';

  public height: string = '';

  public oncontextmenu?: Function;

  protected css_text: string = '';

  constructor () {

  }

  set cssText (text: string) {
    this.css_text = text;
  }

  get cssText (): string {
    return this.css_text;
  }


}

export class HTMLElement extends EventListener {

  public style: CSSStyleDeclaration = new CSSStyleDeclaration();

  protected parent?: HTMLElement;

  protected childArr: HTMLElement[] = [];

  protected elementType: string = '';

  constructor () {
    super();
  }

  set innerText(text: string) {

  }

  get parentElement(): HTMLElement | undefined {
    return this.parent;
  }
  
  get tagName(): string {
    return this.elementType;
  }

  public appendChild(child: HTMLElement): void {
    this.childArr.push(child);
  }
}