declare const _sfc_main: import("vue").DefineComponent<{
    blockMap: {
        type: import("vue").PropType<import("../..").BlockMap>;
        required: boolean;
    };
    contentId: {
        type: StringConstructor;
        required: boolean;
    };
    contentIndex: {
        type: NumberConstructor;
        default: number;
    };
    embedAllow: {
        type: StringConstructor;
        default: string;
    };
    fullPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    mapImageUrl: {
        type: FunctionConstructor;
        default: (image: string | undefined, block: import("../..").Block) => string;
    };
    mapPageUrl: {
        type: FunctionConstructor;
        default: (pageId?: string) => string;
    };
    pageLinkOptions: ObjectConstructor;
    pageLinkTarget: {
        type: StringConstructor;
        default: string;
    };
    prism: {
        type: BooleanConstructor;
        default: boolean;
    };
    katex: {
        type: BooleanConstructor;
        default: boolean;
    };
    textLinkTarget: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        blockMap: {
            type: import("vue").PropType<import("../..").BlockMap>;
            required: boolean;
        };
        contentId: {
            type: StringConstructor;
            required: boolean;
        };
        contentIndex: {
            type: NumberConstructor;
            default: number;
        };
        embedAllow: {
            type: StringConstructor;
            default: string;
        };
        fullPage: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideList: {
            type: ArrayConstructor;
            default: () => never[];
        };
        level: {
            type: NumberConstructor;
            default: number;
        };
        mapImageUrl: {
            type: FunctionConstructor;
            default: (image: string | undefined, block: import("../..").Block) => string;
        };
        mapPageUrl: {
            type: FunctionConstructor;
            default: (pageId?: string) => string;
        };
        pageLinkOptions: ObjectConstructor;
        pageLinkTarget: {
            type: StringConstructor;
            default: string;
        };
        prism: {
            type: BooleanConstructor;
            default: boolean;
        };
        katex: {
            type: BooleanConstructor;
            default: boolean;
        };
        textLinkTarget: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    block: import("vue").ComputedRef<import("../..").Block>;
    type: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    blockMap: {
        type: import("vue").PropType<import("../..").BlockMap>;
        required: boolean;
    };
    contentId: {
        type: StringConstructor;
        required: boolean;
    };
    contentIndex: {
        type: NumberConstructor;
        default: number;
    };
    embedAllow: {
        type: StringConstructor;
        default: string;
    };
    fullPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    mapImageUrl: {
        type: FunctionConstructor;
        default: (image: string | undefined, block: import("../..").Block) => string;
    };
    mapPageUrl: {
        type: FunctionConstructor;
        default: (pageId?: string) => string;
    };
    pageLinkOptions: ObjectConstructor;
    pageLinkTarget: {
        type: StringConstructor;
        default: string;
    };
    prism: {
        type: BooleanConstructor;
        default: boolean;
    };
    katex: {
        type: BooleanConstructor;
        default: boolean;
    };
    textLinkTarget: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    contentIndex: number;
    embedAllow: string;
    fullPage: boolean;
    hideList: unknown[];
    level: number;
    mapImageUrl: Function;
    mapPageUrl: Function;
    pageLinkTarget: string;
    prism: boolean;
    katex: boolean;
    textLinkTarget: string;
}>;
export default _sfc_main;
