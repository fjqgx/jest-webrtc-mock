import { EventListener } from "../base/event-listener";

export class CSSStyleDeclaration {

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

  protected cssStyle: CSSStyleDeclaration = new CSSStyleDeclaration();

  protected parent?: HTMLElement;

  constructor () {
    super();
  }

  get style(): CSSStyleDeclaration {
    return this.cssStyle;
  }

  set innerText(text: string) {

  }

  get parentElement(): HTMLElement | undefined {
    return this.parent;
  }

  public appendChild(child: HTMLElement): void {

  }
}