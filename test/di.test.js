import { describe, expect, it } from "vitest"
import { contextBuilder } from "../src/di.js"

describe(`contextBuilder`, () => {
  it(`allows to register and invoke creators`, () => {
    const { foo } = contextBuilder()
      .register(`foo`, () => 1)
      .build()

    expect(foo).toBe(1)
  })

  it(`does not call a creator until requested`, () => {
    const { foo } = contextBuilder()
      .register(`error`, () => {
        throw Error()
      })
      .register(`foo`, () => 1)
      .build()

    expect(foo).toBe(1)
  })

  it(`allow registring creators in any order`, () => {
    const { foo } = contextBuilder()
      .register(`foo`, ({ bar }) => bar + 1)
      .register(`bar`, () => 1)
      .build()

    expect(foo).toBe(2)
  })

  it(`fails when creator is not a function`, () => {
    expect(() => contextBuilder().register(`foo`, 1)).toThrow(
      /The creator of "foo" is not a function/,
    )
  })

  it(`prevents from overriding creators`, () => {
    expect(() =>
      contextBuilder()
        .register(`foo`, () => 1)
        .register(`foo`, () => 1),
    ).toThrow(/The "foo" is already registered in the context/)
  })

  it(`does not execute creators more than once`, () => {
    let counter = 0
    const context = contextBuilder()
      .register(`foo`, () => {
        counter += 1
        return 1
      })
      .build()
    context.foo
    expect(context.foo).toBe(1)
    expect(counter).toBe(1)
  })
})
