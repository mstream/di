export declare class ContextBuilder {
    private cache;
    private context;
    private wasBuilt;
    constructor();
    build(options?: {
        eagerly: boolean;
    }): object;
    register(name: string, creator: (context: object) => any): this;
}
