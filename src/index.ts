import type { App,Plugin,DirectiveBinding, Directive, ObjectDirective} from 'vue'
import { onBind, onUnbind } from './directive';
import {Settings,EL } from './types';

// export const VPrlx = {
//     created: (el:EL, binding:DirectiveBinding) => {
//         onBind(el, binding)
//     },
//     updated: (el:EL, binding:DirectiveBinding) => {
//         onBind(el, binding)
//     },
//     unmounted: (el:EL) => {
//         onUnbind(el)
//     }

// }
export const VuePrlx:Plugin<ObjectDirective> = {
    install(app:App,options:ObjectDirective) {
        app.directive('prlx', {
            created: (el:EL, binding:DirectiveBinding) => {
                console.log(options);
                onBind(el, binding)
            },
            updated: (el:EL, binding:DirectiveBinding) => {
                onBind(el, binding)
            },
            unmounted: (el:EL) => {
                onUnbind(el)
            }

        })
    }
}
export type  {Settings}
