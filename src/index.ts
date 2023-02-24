import type { App,Plugin,DirectiveBinding, Directive} from 'vue'
import { onBind, onUnbind } from './directive';
import {Values,EL } from './types';

export const vPrlx:Directive = {
    created: (el:EL, binding:DirectiveBinding<Values>) => {
        onBind(el, binding)
    },
    updated: (el:EL, binding:DirectiveBinding<Values>) => {
        onBind(el, binding)
    },
    unmounted: (el:EL) => {
        onUnbind(el)
    }
    
}
export const VuePrlx:Plugin = {
    install(app:App,options) {
        app.directive('prlx', vPrlx)
    }
}
export type  {Values}
