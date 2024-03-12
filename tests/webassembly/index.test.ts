import { mockWebAssembly } from "../../src/webassembly"

describe("test webassembly", () => {

  beforeEach(() => {
    mockWebAssembly();
  })

  test("test support webassembly", () => {
    console.log("webassembly:", !!WebAssembly)
    expect(1).toBe(1)
  })
})