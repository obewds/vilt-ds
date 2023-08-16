// ./src/generators/jetstream/resources/js/Components/generate-section-title-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/SectionTitle.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'

    export default defineComponent({

        // components: {},
        // props: {},

        setup () {

            const classes = {
                group: 'px-4 sm:px-0',
            }

            return { classes }

        },

    })

</script>

<template>

    <div class="md:col-span-1 flex justify-between">

        <div :class="[classes.group]">

            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                <slot name="title" />
            </h3>

            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <slot name="description" />
            </p>

        </div>

        <div :class="[classes.group]">
            <slot name="aside" />
        </div>

    </div>

</template>
`;

}
