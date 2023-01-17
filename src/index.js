export function createContainer() {
  const cache = {};
  const context = {};

  function register(name, creator) {
    if (typeof creator !== `function`) {
      throw Error(`"${name}" creator is not a function`);
    }

    if (name in context) {
      throw Error(`"${name}" is already registered in the context`);
    }

    Object.defineProperty(context, name, {
      get() {
        if (!(name in cache)) {
          cache[name] = creator(context);
        }

        return cache[name];
      },
    });

    return this;
  }

  return { context, register };
}
