declare class ContextBuilder {
    private cache;
    private context;
    private wasBuilt;
    build(options?: {
        eagerly: boolean;
    }): object;
    register(name: string, creator: (context: object) => any): this;
}
export declare function contextBuilder(): ContextBuilder;
export {};
