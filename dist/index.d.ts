import type { Plugin, DirectiveBinding } from 'vue';
import { Settings, EL } from './types';
export declare const VPrlx: {
    created: (el: EL, binding: DirectiveBinding) => void;
    updated: (el: EL, binding: DirectiveBinding) => void;
    unmounted: (el: EL) => void;
};
export declare const VuePrlx: Plugin;
export type { Settings };
