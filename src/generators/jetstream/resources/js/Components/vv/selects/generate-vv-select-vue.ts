// ./src/generators/jetstream/resources/js/Components/vv/selects/generate-vv-select-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/vv/selects/VvSelect.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesSelects } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { VvSelect as LibVvSelect } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { LibVvSelect },

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvSelect.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvSelect.debug,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: appVv.defaults.VvSelect.palette,
            },
            size: {
                type: String as PropType<keyof SizesSelects>,
                default: appVv.defaults.VvSelect.size,
            },
        },

    })

</script>

<template>

    <LibVvSelect
        :color="color"
        :debug="debug"
        :palette="palette"
        :size="size"
        :data-vv-select-prop-color="debug ? color : null"
        :data-vv-select-prop-palette="debug ? palette : null"
        :data-vv-select-prop-size="debug ? size : null"
    >
        <slot/>
    </LibVvSelect>

</template>
`;

}
