// ./src/generators/jetstream/resources/js/Components/generate-input-error-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/InputError.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({

        props: {
            message: {
                type: String,
                default: '',
            },
        },

    })

</script>

<template>

    <div v-show="message">

        <p class="text-sm text-red-600 dark:text-red-400">
            {{ message }}
        </p>

    </div>

</template>
`;

}
