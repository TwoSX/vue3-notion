declare const _sfc_main: import("vue").DefineComponent<{
    format: {
        type: ObjectConstructor;
        required: true;
    };
}, {
    baseWidth: number;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        format: {
            type: ObjectConstructor;
            required: true;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    columnStyle: import("vue").ComputedRef<{
        width: string;
    }>;
    spacerStyle: import("vue").ComputedRef<{
        width: string;
    }>;
    Fragment: {
        name: string;
        render(this: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    format: {
        type: ObjectConstructor;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
