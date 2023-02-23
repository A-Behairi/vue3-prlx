import type { App,Plugin,DirectiveBinding, Directive, ObjectDirective} from 'vue'
import { onBind, onUnbind } from './directive';
import {Settings,EL } from './types';

export const VPrlx = {
    created: (el:EL, binding:DirectiveBinding) => {
        onBind(el, binding)
    },
    updated: (el:EL, binding:DirectiveBinding) => {
        onBind(el, binding)
    },
    unmounted: (el:EL) => {
        onUnbind(el)
    }

}
export const VuePrlx:Plugin = {
    install(app:App,options:ObjectDirective) {
        app.directive('prlx', VPrlx)
    }
}
export type  {Settings}
