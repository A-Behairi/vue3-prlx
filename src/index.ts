import type { App,Plugin,DirectiveBinding, Directive} from 'vue'
import { onBind, onUnbind } from './directive';
import {Settings,EL } from './types';

export const VPrlx:Plugin<Directive> = {
    install(app:App) {
        app.directive('prlx', {
            created: (el:EL, binding:DirectiveBinding) => {
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
