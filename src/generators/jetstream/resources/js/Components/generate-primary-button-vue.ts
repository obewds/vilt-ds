// ./src/generators/jetstream/resources/js/Components/generate-primary-button-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/PrimaryButton.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { defineComponent } from 'vue'
    import { ValidButtonTypes } from '@obewds/vueventus'

    export default defineComponent({

        props: {
            type: {
                type: String as PropType<ValidButtonTypes>,
                default: 'submit',
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

    })

</script>

<template>

    <button
        :type="type"
        class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
    >
        <slot />
    </button>

</template>
`;

}
