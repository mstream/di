export class ContextBuilder {
    constructor() {
        this.cache = {};
        this.context = {};
        this.wasBuilt = false;
    }
    build(options = { eagerly: false }) {
        this.wasBuilt = true;
        if (options.eagerly) {
            Object.getOwnPropertyNames(this.context).forEach((name) => this.context[name]);
        }
        return this.context;
    }
    register(name, creator) {
        if (this.wasBuilt) {
            throw Error(`The context has already been built.`);
        }
        if (typeof creator !== `function`) {
            throw Error(`The creator of "${name}" is not a function.`);
        }
        if (name in this.context) {
            throw Error(`The "${name}" is already registered in the context.`);
        }
        const { cache, context } = this;
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
}
