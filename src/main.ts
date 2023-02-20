import type { App } from 'vue'
import { VPrlx } from './plugin';

export const VuePrlx = {
    install(app: App) {
        // Auto import all components
            app.use(VPrlx)
    }
}
export default VuePrlx;