import { describe, expect, it } from "vitest"
import { ContextBuilder } from "../../dist/di.js"

describe(`ContextBuilder`, () => {
  it(`allows to register and invoke creators`, () => {
    const { foo } = new ContextBuilder()
      .register(`foo`, () => 1)
      .build()

    expect(foo).toBe(1)
  })

  it(`by default, does not call a creator until requested`, () => {
    const { foo } = new ContextBuilder()
      .register(`error`, () => {
        throw Error()
      })
      .register(`foo`, () => 1)
      .build()

    expect(foo).toBe(1)
  })

  it(`call every creator during building the context eagerly`, () => {
    expect(() =>
      new ContextBuilder()
        .register(`error`, () => {
          throw Error("creator error")
        })
        .build({ eagerly: true }),
    ).toThrow(/creator error/)
  })

  it(`allow registring creators in any order`, () => {
    const { foo } = new ContextBuilder()
      .register(`foo`, ({ bar }) => bar + 1)
      .register(`bar`, () => 1)
      .build()

    expect(foo).toBe(2)
  })

  it(`fails when creator is not a function`, () => {
    expect(() => new ContextBuilder().register(`foo`, 1)).toThrow(
      /The creator of "foo" is not a function/,
    )
  })

  it(`prevents from overriding creators`, () => {
    expect(() =>
      new ContextBuilder()
        .register(`foo`, () => 1)
        .register(`foo`, () => 1),
    ).toThrow(/The "foo" is already registered in the context/)
  })

  it(`does not execute creators more than once`, () => {
    let counter = 0
    const context = new ContextBuilder()
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
