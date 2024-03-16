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

  protected childArr: HTMLElement[] = [];

  protected type: string = "";

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
    this.childArr.push(child);
  }

  public addEventListener(event: string, callback: Function, capture?: boolean): void {

  }

  public removeEventListener(event: string, callback: Function, capture?: boolean): void {
    
  }

  public querySelector(elementType: string): HTMLElement | undefined {
    if (elementType === "canvas") {
      for (let i = 0; i < this.childArr.length; ++i) {
        if (this.childArr[i].type == "canvas") {
          return this.childArr[i];
        }
      }
    }
    return undefined;
  }
}