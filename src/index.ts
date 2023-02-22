import type { App,Plugin } from 'vue'
import { onBind, onUnbind } from './directive';
import { EL, Bindings,Modifiers,Settings,Values } from './types';

export const VPrlx:Plugin = {
    install(app:App, Bindings:Bindings) {
        console.log(Bindings);
        app.directive('prlx', {
            beforeMount: (el:EL, binding:Bindings = { modifiers: {}, value: {} }) => {
                onBind(el, binding)
            },
            updated: (el:EL, binding:Bindings = { modifiers: {}, value: {} }) => {
                onBind(el, binding)
            },
            unmounted: (el:EL) => {
                onUnbind(el)
            }

        })
    }
}
export type  {Settings,Modifiers,Values}
