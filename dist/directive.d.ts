import { EL } from "./types";
import type { DirectiveBinding } from 'vue';
export declare function onUnbind(el: EL): void;
export declare function onBind(el: EL, { modifiers, value }: DirectiveBinding): void;
