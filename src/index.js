function createContainer() {
  const cache = {}
  const context = {}

  function register(
    name,
    creator,
  ) {
    if (name in context) {
      throw Error(`"${name}" is already registered in the context`)
    }

    Object.defineProperty(
      context,
      name,
      {
        get() {
          if (!(name in cache)) {
            cache[name] = creator(context)
          }

          return cache[name]
        },
      },
    )
  }

  return { context, register }
}

module.exports = { createContainer }

