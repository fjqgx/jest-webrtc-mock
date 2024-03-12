

// export class WebAssembly {
//   static Module: Function = WebAssemblyModule;
// }

// class WebAssemblyModule {
//   constructor () {

//   }
// }

const originWebAssembly = WebAssembly;

export function mockWebAssembly (): void {
  if (!!WebAssembly) {
    return;
  }
  if (originWebAssembly) {
    (global as any).WebAssembly = originWebAssembly;
  }
}

export function mockWebAssemblyClear(): void {
  delete (global as any).WebAssembly;
}