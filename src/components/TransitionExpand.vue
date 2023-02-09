<template>
    <Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div v-if="expanded">
            <slot />
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
    expanded: boolean;
    duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
    duration: 300,
    expanded: false,
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

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
    transition: height v-bind(msDuration) ease-in-out;
    overflow: hidden;
}
</style>
