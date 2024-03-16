import { WebGLShader } from "./webgl-shader";

export class WebGLRenderingContext {

  protected shader?: WebGLShader;

  constructor () {
    
  }

  public shaderSource(shader: WebGLShader, source: string): void {

  }

  public createShader(type: GLenum): WebGLShader | null {
    if (!this.shader) {
      this.shader = new WebGLShader();
    }
    return this.shader;
  }

  public compileShader(shader: WebGLShader): void {

  }

  public getShaderParameter(shader: WebGLShader, pname: GLenum): any {
    return true;
  }
}