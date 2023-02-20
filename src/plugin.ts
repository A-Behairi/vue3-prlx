import type { App,Plugin } from 'vue'
import { onBind, onUnbind } from './directive';
import { Modifiers,EL } from './types';

export const VPrlx:Plugin = {
    install(app:App, options={}) {
        console.log(options);
        app.directive('prlx', {
            beforeMount: (el:EL, binding:Modifiers = { modifiers: {}, value: {} }) => {
                onBind(el, binding)
            },
            updated: (el:EL, binding:Modifiers = { modifiers: {}, value: {} }) => {
                onBind(el, binding)
            },
            unmounted: (el:EL) => {
                onUnbind(el)
            }

        })
    }
}
export default VPrlx;
