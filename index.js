function createContainer() {
  const context = {}

  function register(name, creator) {
    Object.defineProperty(
      context,
      name,
      { get() { return creator(context) } }
    )
  }

  return { context, register }
}

module.exports = { createContainer }

