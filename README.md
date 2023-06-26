# Vue Transition Expand

This is a Vue 3 plugin to transition element to `height: auto;` based on [Markus
Oberlehner article](https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/).

#### 👉 [Demo on StackBlitz](https://stackblitz.com/edit/vue-e9x3oe?file=src/App.vue)

## Installation

```bash
npm install vue3-transition-expand
# or
yarn add vue3-transition-expand
```

## Import

### Global import
```javascript
import TransitionExpand from 'vue3-transition-expand'

Vue.use(TransitionExpand, {
    // optional global options (see below)
})
```

### Local import

```js
import { TransitionExpand } from 'vue3-transition-expand';

export default {
    components: {
        TransitionExpand,
    },
    data () {
        return {
            expanded: false,
        };
    },
}
```

### Nuxt plugin
```js
import TransitionExpand from 'vue3-transition-expand';
import 'vue3-transition-expand/dist/style.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(TransitionExpand, {
        // optional global options (see below)
    })
});
```

## Configuration

### Global Options
```ts
interface PluginOptions {
    componentName?: string; // default: 'TransitionExpand'
    duration?: number; // default: 300
    hwAcceleration?: boolean // default: false
}
```

### Component Props
```ts
export interface Props {
    expanded: boolean; // default: false
    duration?: number; // default: 300
    hwAcceleration?: boolean; // default: false
}
```

## Example

```html
<TransitionExpand :expanded="expanded">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</TransitionExpand>
<button @click="expanded = !expanded">{{ !expanded ? 'Expand' : 'Collapse' }}</button>
```
