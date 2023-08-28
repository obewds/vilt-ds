// ./src/generators/jetstream/resources/js/Components/generate-action-message-vue.ts
export default function () {
    return `<!-- ./resources/js/Components/ActionMessage.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import VvEl from './vv/elements/VvEl.vue'

    export default defineComponent({

        components: { VvEl },

        props: {
            on: {
                type: Boolean,
                default: false,
            },
            textColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: 'success',
            },
            textPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: 'default',
            },
        },

    })

</script>

<template>

    <div>

        <transition
            leave-active-class="transition ease-in duration-1000"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <VvEl
                v-show="on"
                size="sm"
                :text-palette="textPalette"
                :text-color="textColor"
            >
                <slot />
            </VvEl>
        </transition>

    </div>

</template>
`;
}
//# sourceMappingURL=generate-action-message-vue.js.map