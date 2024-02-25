# vue3-prlx

### this is the vue 3 version of (https://github.com/gerasimvol/vue-prlx)

## [Demo and settings](http://vue-prlx.surge.sh)

### 🛠 Install

```bash
npm i vue3-prlx
```

```bash
yarn add vue3-prlx
```

### 🔌 Initialization

```javascript
import App from "./App.vue";
import { createApp } from "vue";

// As a plugin
import { VuePrlx } from "vue3-prlx";

const app = createApp(App)

app.use(VuePrlx);

// Or as a directive
import { VuePrlxDirective } from 'vue3-prlx'

app.directive('prlx', VuePrlxDirective);
```

### ⚙️ [Demo and settings](http://vue-prlx.surge.sh)
