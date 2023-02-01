import TransitionExpand from './components/TransitionExpand.vue';

export { TransitionExpand };

export default {
    install: (app, options) => {
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
