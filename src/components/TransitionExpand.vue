<template>
    <Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div v-if="modelValue">
            <slot />
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
    duration?: number;
    modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    duration: 300,
    modelValue: false,
});

const msDuration = computed(() => {
    return `${props.duration}ms`;
});

const enter = (element: HTMLElement) => {
    element.style.height = '0px';
    requestAnimationFrame(() => {
        element.style.height = element.scrollHeight + 'px';
    });
};
const afterEnter = (element: any) => {
    element.style.height = '';
};
const leave = (element: HTMLElement) => {
    element.style.height = element.scrollHeight + 'px';
    requestAnimationFrame(() => {
        element.style.height = '0px';
    });
};
</script>

<style lang="scss" scoped>
* {
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
* {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>
