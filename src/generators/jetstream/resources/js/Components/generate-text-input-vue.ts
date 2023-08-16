// ./src/generators/jetstream/resources/js/Components/generate-text-input-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/TextInput.vue -->

<script lang="ts">

    import { defineComponent, onMounted, ref } from 'vue'

    export default defineComponent({

        emits: ['update:modelValue'],

        props: {
            modelValue: {
                type: String,
                default: '',
            },
        },

        setup ({}, context) {

            const input = ref<null|HTMLInputElement>(null)

            onMounted(() => {
                if (input?.value?.hasAttribute('autofocus')) {
                    input.value.focus()
                }
            })

            context.expose({ focus: () => input?.value?.focus() })

            const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value

            return { handleInputChange }

        },

    })

</script>

<template>

    <input
        ref="input"
        class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', handleInputChange($event as Event))"
    >

</template>
`;

}
