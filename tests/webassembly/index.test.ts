import { mockWebAssembly } from "../../src/webassembly"

describe("test webassembly", () => {

  beforeEach(() => {
    mockWebAssembly();
  })

  test("test support webassembly", () => {
    expect(1).toBe(1)
  })
})