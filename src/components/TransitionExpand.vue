<template>
    <Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div v-if="expanded">
            <slot />
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { PLUGIN_KEY } from '../keys';
import type { PluginOptions } from '../index';

export interface Props {
    expanded: boolean;
    duration?: number;
    hwAcceleration?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    expanded: false,
    duration: () => inject<PluginOptions>(PLUGIN_KEY)?.duration || 300,
    //@ts-ignore
    hwAcceleration: () => inject<PluginOptions>(PLUGIN_KEY)?.hwAcceleration || false,
});

const msDuration = computed(() => {
    return `${props.duration}ms`;
});

const enter = (element: Element) => {
    if(element instanceof HTMLElement) {
        element.style.height = '0px';
        requestAnimationFrame(() => {
            element.style.height = element.scrollHeight + 'px';
        });
    }
};
const afterEnter = (element: Element) => {
    if(element instanceof HTMLElement) {
        element.style.height = '';
    }
};
const leave = (element: Element) => {
    if(element instanceof HTMLElement) {
        element.style.height = element.scrollHeight + 'px';
        requestAnimationFrame(() => {
            element.style.height = '0px';
        });
    }
};
</script>

<style lang="scss" scoped>
.hw-acceleration {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
    transition: height v-bind(msDuration) ease-in-out;
    overflow: hidden;
}
</style>
