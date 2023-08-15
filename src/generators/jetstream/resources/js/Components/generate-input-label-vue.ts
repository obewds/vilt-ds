// ./src/generators/jetstream/resources/js/Components/generate-input-label-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/InputLabel.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({

        props: {
            value: {
                type: String,
                default: '',
            },
        },

    })

</script>

<template>

    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">

        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>

    </label>

</template>
`;

}
