export function contextBuilder() {
  let wasBuilt = false

  const cache = {}
  const context = {}
  const eagerMembers = []

  function build() {
    wasBuilt = true
    eagerMembers.forEach((name) => context[name])
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
      get() {
        if (!(name in cache)) {
          cache[name] = creator(context)
        }

        return cache[name]
      },
    })

    return this
  }

  function registerEager(name, creator) {
    eagerMembers.push(name)
    register(name, creator)
    return this
  }

  return { build, register, registerEager }
}
