import type { App,Plugin,DirectiveBinding} from 'vue'
import { onBind, onUnbind } from './directive';
import { EL,Modifiers,Settings,Values } from './types';

export const VPrlx:Plugin = {
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
export type  {Settings,Modifiers,Values}
