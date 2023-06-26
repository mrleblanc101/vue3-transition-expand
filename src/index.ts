import type { App } from 'vue';
import TransitionExpand from './components/TransitionExpand.vue';
import { PLUGIN_KEY } from './keys';

export interface PluginOptions {
    componentName?: string;
    duration?: number;
    hwAcceleration?: boolean;
}

export default {
    install: (app: App, options: PluginOptions = {}) => {
        app.component(options?.componentName || 'TransitionExpand', TransitionExpand);
        app.provide(PLUGIN_KEY, options as PluginOptions);
    },
};

export { TransitionExpand };
