import { App } from 'vue';
import TransitionExpand from './components/TransitionExpand.vue';

export { TransitionExpand };

export default {
    install: (app: App, options: { duration?: number }) => {
        app.component('TransitionExpand', {
            extends: TransitionExpand,
            setup: TransitionExpand.setup,
            props: {
                duration: {
                    default: options?.duration,
                },
            },
        });
    },
};
