declare class ContextBuilder {
    private cache;
    private context;
    private wasBuilt;
    build(): object;
    register(name: string, creator: (context: object) => any): this;
}
export declare function contextBuilder(): ContextBuilder;
export {};
