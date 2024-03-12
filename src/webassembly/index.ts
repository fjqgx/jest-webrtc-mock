

// export class WebAssembly {
//   static Module: Function = WebAssemblyModule;
// }

// class WebAssemblyModule {
//   constructor () {

//   }
// }

export function mockWebAssembly (): void {
  if (!!WebAssembly) {
    return;
  }
  // (global as any).WebAssembly = WebAssembly;
}

export function mockWebAssemblyClear(): void {
  delete (global as any).WebAssembly;
}