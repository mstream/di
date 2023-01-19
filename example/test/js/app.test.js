import sinon from "sinon"
import { describe, expect, it } from "vitest"
import appCreator from "../src/app.js"

describe(`app`, () => {
  it(`logs a message at every possible level`, () => {
    const debug = sinon.spy()
    const error = sinon.spy()
    const info = sinon.spy()
    const warning = sinon.spy()
    appCreator({
      logger: { debug, error, info, warning },
    })(`abc`)

    expect(debug.calledWith(`abc`)).toBe(true)
    expect(error.calledWith(`abc`)).toBe(true)
    expect(info.calledWith(`abc`)).toBe(true)
    expect(warning.calledWith(`abc`)).toBe(true)
  })
})
