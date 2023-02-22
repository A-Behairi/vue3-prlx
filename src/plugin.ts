import type { App,Plugin } from 'vue'
import { onBind, onUnbind } from './directive';
import { EL, Options } from './types';

export const VPrlx:Plugin = {
    install(app:App, options:Options) {
        console.log(options);
        app.directive('prlx', {
            beforeMount: (el:EL, binding:Options = { modifiers: {}, value: {} }) => {
                onBind(el, binding)
            },
            updated: (el:EL, binding:Options = { modifiers: {}, value: {} }) => {
                onBind(el, binding)
            },
            unmounted: (el:EL) => {
                onUnbind(el)
            }

        })
    }
}
export default VPrlx;
