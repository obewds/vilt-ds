// ./src/generators/jetstream/resources/js/Components/generate-action-section-vue.ts
export default function () {
    return `<!-- ./resources/js/Components/ActionSection.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import SectionTitle from './SectionTitle.vue'

    export default defineComponent({

        components: { SectionTitle },

    })

</script>

<template>

    <div class="md:grid md:grid-cols-3 md:gap-6">

        <SectionTitle>

            <template #title>
                <slot name="title" />
            </template>

            <template #description>
                <slot name="description" />
            </template>

        </SectionTitle>

        <div class="mt-5 md:mt-0 md:col-span-2">

            <div class="px-4 py-5 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <slot name="content" />
            </div>

        </div>

    </div>

</template>
`;
}
//# sourceMappingURL=generate-action-section-vue.js.map