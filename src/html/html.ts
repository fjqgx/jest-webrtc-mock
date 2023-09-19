class CSSStyleDeclaration {

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

export class HTMLElement {

  protected cssStyle: CSSStyleDeclaration = new CSSStyleDeclaration();

  protected parent?: HTMLElement;

  constructor () {

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

  public addEventListener(event: string, callback: Function, capture?: boolean): void {

  }

  public removeEventListener(event: string, callback: Function, capture?: boolean): void {
    
  }
}