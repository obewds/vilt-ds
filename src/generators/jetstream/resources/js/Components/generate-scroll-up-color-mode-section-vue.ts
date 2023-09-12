// ./src/generators/jetstream/resources/js/Components/generate-scroll-up-color-mode-section-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/ScrollUpColorModeSection.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { ValidColorModes } from '@obewds/vueventus'
    import type { DefaultButtonPalettes, DefaultPaletteColors, DefaultPalettes, SizesButtons, SizesText } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { VvColorModeButton } from '@obewds/vueventus'
    import VvScrollUp from '../Components/vv/buttons/VvScrollUp.vue'

    export default defineComponent({

        components: {
            VvColorModeButton,
            VvScrollUp,
        },

        props: {
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: 'primary',
            },
            palette: {
                type: String as PropType<keyof DefaultButtonPalettes>,
                default: 'solid',
            },
        },

        setup () {

            const colorMode = typeof window !== 'undefined' && localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') as ValidColorModes : 'light' as ValidColorModes

            return {
                colorMode,
            }
        },

    })

</script>

<template>

    <aside class="fixed bottom-0 right-0 text-right z-30">

        <nav class="relative bottom-0 pb-3 pr-3">

            <div class="flex flex-col justify-end space-y-3">

                <VvScrollUp :palette="palette" :color="color"/>

                <VvColorModeButton :palette="palette" :color="color" :mode="colorMode"/>

            </div>

        </nav>

    </aside>

</template>
`;

}
