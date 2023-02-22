export interface Bindings {
    modifiers: Modifiers;
    value: Values;
}
export interface Modifiers {
    mobile?: boolean;
    background?: boolean;
}
export interface Values {
    fromBottom?: boolean;
    custom?: boolean;
    reverse?: boolean;
    speed?: number;
    preserveInitialPosition?: boolean;
    direction?: string;
    limit?: {
        min: number;
        max: number;
    } | null;
    mobileMaxWidth?: number;
    disabled?: boolean;
}
export interface Settings {
    isParallaxOnMobile: boolean;
    background: boolean;
    startParallaxFromBottom: boolean;
    justAddParallaxValue: boolean;
    reverse: boolean;
    speed: number;
    preserveInitialPosition: boolean;
    direction: string;
    limit: {
        min: number;
        max: number;
    } | null;
    mobileMaxWidth: number;
    isDisabled: boolean;
}
export type EL = HTMLElement & {
    __prlxRequestAnimationFrameId?: number;
};
