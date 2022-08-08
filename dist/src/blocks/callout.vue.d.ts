/// <reference types="shim/vue" />
declare const _sfc_main: import("vue").DefineComponent<{
    blockMap: {
        type: import("vue").PropType<import("..").BlockMap>;
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
        default: (image: string | undefined, block: import("..").Block) => string;
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
            type: import("vue").PropType<import("..").BlockMap>;
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
            default: (image: string | undefined, block: import("..").Block) => string;
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
    pass: import("vue").ComputedRef<{
        blockMap: import("..").BlockMap;
        contentId: string | undefined;
        contentIndex: number;
        embedAllow: string;
        fullPage: boolean;
        hideList: string[] | undefined;
        level: number;
        mapImageUrl: Function;
        mapPageUrl: Function;
        pageLinkOptions: import("..").PageLinkOptions | undefined;
        prism: boolean;
        katex: boolean;
    }>;
    title: import("vue").ComputedRef<string[]>;
    blockColorClass: (suffix?: string) => string | undefined;
    NotionPageIcon: import("vue").DefineComponent<{
        blockMap: {
            type: import("vue").PropType<import("..").BlockMap>;
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
            default: (image: string | undefined, block: import("..").Block) => string;
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
        big: BooleanConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            blockMap: {
                type: import("vue").PropType<import("..").BlockMap>;
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
                default: (image: string | undefined, block: import("..").Block) => string;
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
            big: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        icon: import("vue").ComputedRef<string | undefined>;
        format: import("vue").ComputedRef<import("..").Format>;
        block: import("vue").ComputedRef<import("..").Block>;
        title: import("vue").ComputedRef<string[]>;
        getTextContent: (text: string[]) => string;
        DefaultPageIcon: typeof import("*.vue");
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        blockMap: {
            type: import("vue").PropType<import("..").BlockMap>;
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
            default: (image: string | undefined, block: import("..").Block) => string;
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
        big: BooleanConstructor;
    }>>, {
        big: boolean;
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
    NotionTextRenderer: import("vue").DefineComponent<{
        blockMap: {
            type: import("vue").PropType<import("..").BlockMap>;
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
            default: (image: string | undefined, block: import("..").Block) => string;
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
        text: import("vue").PropType<string[]>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            blockMap: {
                type: import("vue").PropType<import("..").BlockMap>;
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
                default: (image: string | undefined, block: import("..").Block) => string;
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
            text: import("vue").PropType<string[]>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        pass: import("vue").ComputedRef<{
            blockMap: import("..").BlockMap;
            contentId: string | undefined;
            contentIndex: number;
            embedAllow: string;
            fullPage: boolean;
            hideList: string[] | undefined;
            level: number;
            mapImageUrl: Function;
            mapPageUrl: Function;
            pageLinkOptions: import("..").PageLinkOptions | undefined;
            prism: boolean;
            katex: boolean;
        }>;
        format: import("vue").ComputedRef<import("..").Format>;
        NotionDecorator: import("vue").DefineComponent<{
            blockMap: {
                type: import("vue").PropType<import("..").BlockMap>;
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
                default: (image: string | undefined, block: import("..").Block) => string;
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
            content: import("vue").PropType<string | string[]>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                blockMap: {
                    type: import("vue").PropType<import("..").BlockMap>;
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
                    default: (image: string | undefined, block: import("..").Block) => string;
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
                content: import("vue").PropType<string | string[]>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            blockProps: Readonly<import("..").NotionBlockProps>;
            pass: import("vue").ComputedRef<{
                blockMap: import("..").BlockMap;
                contentId: string | undefined;
                contentIndex: number;
                embedAllow: string;
                fullPage: boolean;
                hideList: string[] | undefined;
                level: number;
                mapImageUrl: Function;
                mapPageUrl: Function;
                pageLinkOptions: import("..").PageLinkOptions | undefined;
                prism: boolean;
                katex: boolean;
            }>;
            type: import("vue").ComputedRef<string>;
            hasPageLinkOptions: import("vue").ComputedRef<any>;
            pageLinkProps: (id: string) => {
                [x: string]: any;
            };
            text: import("vue").ComputedRef<string | undefined>;
            decorators: import("vue").ComputedRef<string | never[]>;
            decoratorKey: import("vue").ComputedRef<string>;
            decoratorValue: import("vue").ComputedRef<any>;
            unappliedDecorators: import("vue").ComputedRef<any>;
            nextContent: import("vue").ComputedRef<any[]>;
            isPageLink: import("vue").ComputedRef<boolean>;
            isDateContent: import("vue").ComputedRef<boolean>;
            isInlinePageLink: import("vue").ComputedRef<boolean>;
            pageLinkTitle: import("vue").ComputedRef<string>;
            target: import("vue").ComputedRef<string>;
            NotionKatek: import("vue").DefineComponent<{
                expression: {
                    type: StringConstructor;
                    required: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    expression: {
                        type: StringConstructor;
                        required: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                html: import("vue").ComputedRef<string>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                expression: {
                    type: StringConstructor;
                    required: true;
                };
            }>>, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            blockMap: {
                type: import("vue").PropType<import("..").BlockMap>;
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
                default: (image: string | undefined, block: import("..").Block) => string;
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
            content: import("vue").PropType<string | string[]>;
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        blockMap: {
            type: import("vue").PropType<import("..").BlockMap>;
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
            default: (image: string | undefined, block: import("..").Block) => string;
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
        text: import("vue").PropType<string[]>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    blockMap: {
        type: import("vue").PropType<import("..").BlockMap>;
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
        default: (image: string | undefined, block: import("..").Block) => string;
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
