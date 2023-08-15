// ./src/generators/jetstream/resources/js/Components/generate-form-section-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/FormSection.vue -->

<script lang="ts">

    import { computed, defineComponent, useSlots } from 'vue'

    import SectionTitle from './SectionTitle.vue'

    export default defineComponent({

        emits: ['submitted'],

        components: { SectionTitle },

        setup ({}, context) {

            const hasActions = computed(() =>  useSlots().actions ? true : false)

            const emitSubmitted = () => context.emit('submitted')

            return {
                emitSubmitted,
                hasActions,
            }

        },

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

            <form @submit.prevent="emitSubmitted()">

                <div
                    class="px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow"
                    :class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'"
                >

                    <div class="grid grid-cols-6 gap-6">
                        <slot name="form" />
                    </div>

                </div>

                <div v-if="hasActions" class="flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                    <slot name="actions" />
                </div>

            </form>

        </div>

    </div>

</template>
`;

}
