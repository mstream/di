import { describe, expect, it } from 'vitest'
import { createContainer } from '.'


describe(
  `createContainer()`,
  () => {
    it(
      `allows to register and invoke creators`,
      () => {
        const container = createContainer()
        container.register(`string`, () => `abc`)
        expect(container.context.string).toBe(`abc`)
      }
    )
    it(
      `does not call a creator until requested`,
      () => {
        const container = createContainer()
        container.register(`error`, () => { throw Error() })
        container.register(`string`, () => `abc`)
        expect(container.context.string).toBe(`abc`)
      }
    )
    it(
      `allow registring creators in any order`,
      () => {
        const container = createContainer()
        container.register(`string`, ({ number }) => `abc${number}`)
        container.register(`number`, () => 1)
        expect(container.context.string).toBe(`abc1`)
      }
    )
  }
)

