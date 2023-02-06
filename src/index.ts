import type { App, Plugin } from 'vue';
import TransitionExpand from './components/TransitionExpand.vue';

export interface PluginOptions {
    componentName?: string;
    duration?: number;
}

export default {
    install: (app: App, options: PluginOptions = {}) => {
        app.component(options?.componentName || 'TransitionExpand', {
            extends: TransitionExpand,
            setup: TransitionExpand.setup,
            props: {
                duration: {
                    default: options?.duration,
                },
            },
        });
    },
} as Plugin;

export { TransitionExpand };
