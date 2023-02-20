export interface Modifiers {
    modifiers: Settings,
    value: any
}

export interface Settings {
    mobile?: any;
    background?: any;
    startParallaxFromBottom?: any;
    justAddParallaxValue?: any;
    reverse?: any;
    speed?: any;
    preserveInitialPosition?: any;
    direction?: any;
    limit?: any;
    mobileMaxWidth?: any;
    isDisabled?: any;
}
export type EL = HTMLElement & { __prlxRequestAnimationFrameId: number }
