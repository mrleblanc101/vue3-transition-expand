# Vue Transition Expand (for Vue 3)

This is a project for transition element which height is auto based on this [article](https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/).

## Installation

#### NPM
```bash
npm install vue3-transition-expand
# or
yarn add vue3-transition-expand
```

## Import

#### Global
```javascript
import TransitionExpand from 'vue3-transition-expand'

Vue.use(TransitionExpand)

// To override the default duration
Vue.use(TransitionExpand, {
    duration: 300 // default
})
```

#### Component

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

#### Nuxt
```js
import TransitionExpand from 'vue3-transition-expand';
import 'vue3-transition-expand/dist/style.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(TransitionExpand, {
        duration: 300 // default
    });
});
```

## Example
```html
<TransitionExpand :expanded="expanded" :duration="300">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</TransitionExpand>
<button @click="show = !show">Expand !</button>
```

## TODO
- [ ] Add TypeScript Definition
- [ ] Provide Nuxt module/plugin
- [ ] Interupting should reverse the animation at it's current state instead of from the end
- [ ] Do not extract styles ?
- [ ] Auto-generate changelog, add CHANGELOG.md
