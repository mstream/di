function createContainer() {
  const context = {}

  function register(name, creator) {
    if (name in context) {
      throw Error(`"${name}" is already registered in the context`)
    }
    Object.defineProperty(
      context,
      name,
      { get() { return creator(context) } }
    )
  }

  return { context, register }
}

module.exports = { createContainer }

