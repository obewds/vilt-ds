// ./src/generators/jetstream/resources/js/Components/generate-danger-button-vue.ts
export default function () {
    return `<!-- ./resources/js/Components/DangerButton.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { defineComponent } from 'vue'
    import { ValidButtonTypes } from '@obewds/vueventus'

    export default defineComponent({

        props: {
            type: {
                type: String as PropType<ValidButtonTypes>,
                default: 'button',
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

    })

</script>

<template>

    <button
        :type="type"
        class="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
    >
        <slot />
    </button>

</template>
`;
}
//# sourceMappingURL=generate-danger-button-vue.js.map