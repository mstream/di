import sinon from "sinon"
import { describe, expect, it } from "vitest"
import loggerCreator, {
  DEBUG,
  ERROR,
  INFO,
  WARNING,
} from "../../src/js/logger.js"

describe(`logger`, () => {
  it(`debug log is printed when logging level is set to debug`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: DEBUG },
      console: { info },
    }).debug(`abc`)

    expect(info.calledWith(`[DEBUG] abc`)).toBe(true)
  })
  it(`debug log is not printed when logging level is set to info`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: INFO },
      console: { info },
    }).debug(`abc`)
    expect(info.called).toBe(false)
  })
  it(`debug log is not printed when logging level is set to warning`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: WARNING },
      console: { info },
    }).debug(`abc`)
    expect(info.called).toBe(false)
  })
  it(`debug log is not printed when logging level is set to error`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: ERROR },
      console: { info },
    }).debug(`abc`)
    expect(info.called).toBe(false)
  })
  it(`info log is printed when logging level is set to debug`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: DEBUG },
      console: { info },
    }).info(`abc`)

    expect(info.calledWith(`[INFO] abc`)).toBe(true)
  })
  it(`info log is printed when logging level is set to info`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: INFO },
      console: { info },
    }).info(`abc`)
    expect(info.calledWith(`[INFO] abc`)).toBe(true)
  })
  it(`info log is not printed when logging level is set to warning`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: WARNING },
      console: { info },
    }).info(`abc`)
    expect(info.called).toBe(false)
  })
  it(`info log is not printed when logging level is set to error`, () => {
    const info = sinon.spy()
    loggerCreator({
      config: { logLevel: ERROR },
      console: { info },
    }).info(`abc`)
    expect(info.called).toBe(false)
  })
  it(`warning log is printed when logging level is set to debug`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: DEBUG },
      console: { error },
    }).warning(`abc`)

    expect(error.calledWith(`[WARNING] abc`)).toBe(true)
  })
  it(`warning log is printed when logging level is set to info`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: INFO },
      console: { error },
    }).warning(`abc`)
    expect(error.calledWith(`[WARNING] abc`)).toBe(true)
  })
  it(`warning log is printed when logging level is set to warning`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: WARNING },
      console: { error },
    }).warning(`abc`)
    expect(error.calledWith(`[WARNING] abc`)).toBe(true)
  })
  it(`warning log is not printed when logging level is set to error`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: ERROR },
      console: { error },
    }).warning(`abc`)
    expect(error.called).toBe(false)
  })
  it(`error log is printed when logging level is set to debug`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: DEBUG },
      console: { error },
    }).error(`abc`)

    expect(error.calledWith(`[ERROR] abc`)).toBe(true)
  })
  it(`error log is printed when logging level is set to info`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: INFO },
      console: { error },
    }).error(`abc`)
    expect(error.calledWith(`[ERROR] abc`)).toBe(true)
  })
  it(`error log is printed when logging level is set to warning`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: WARNING },
      console: { error },
    }).error(`abc`)
    expect(error.calledWith(`[ERROR] abc`)).toBe(true)
  })
  it(`error log is printed when logging level is set to error`, () => {
    const error = sinon.spy()
    loggerCreator({
      config: { logLevel: ERROR },
      console: { error },
    }).error(`abc`)
    expect(error.calledWith(`[ERROR] abc`)).toBe(true)
  })
})
