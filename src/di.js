/**
 * @module
 */

/**
 * @typedef {function} BuildFn
 * @returns {object}
 */

/**
 * @typedef {function} RegisterFn
 * @param {string} name
 * @param {function} creator
 * @returns {ContextBuilder}
 */

/**
 * @typedef {object} ContextBuilder
 * @property {BuildFn} build - builds a context with registered dependencies inside it
 * @property {RegisterFn} register - register a depenency
 */

/** Creates a builder which allow to register
 * dependency creators.
 * @returns {ContextBuilder}
 */
export function contextBuilder() {
  let wasBuilt = false
  const cache = {}
  const context = {}

  function build() {
    wasBuilt = true
    return context
  }

  function register(name, creator) {
    if (wasBuilt) {
      throw Error(`The context has already been built.`)
    }

    if (typeof creator !== `function`) {
      throw Error(`The creator of "${name}" is not a function.`)
    }

    if (name in context) {
      throw Error(`The "${name}" is already registered in the context.`)
    }

    Object.defineProperty(context, name, {
      get: function () {
        if (!(name in cache)) {
          cache[name] = creator(context)
        }

        return cache[name]
      },
    })

    return this
  }

  return {
    build,
    register,
  }
}
