// ./src/generators/jetstream/resources/js/Components/generate-checkbox-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/Checkbox.vue -->

<script lang="ts">

    import { computed, defineComponent } from 'vue'

    export default defineComponent({

        emits: ['update:checked'],

        props: {
            checked: {
                type: [Array, Boolean],
                default: false,
            },
            value: {
                type: String,
                default: null,
            },
        },

        setup (props, context) {

            const proxyChecked = computed({
                get() {
                    return props.checked
                },
                set(val) {
                    context.emit('update:checked', val)
                },
            })

            return { proxyChecked }

        },

    })

</script>


<template>

    <input
        v-model="proxyChecked"
        type="checkbox"
        :value="value"
        class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
    >

</template>
`;

}
