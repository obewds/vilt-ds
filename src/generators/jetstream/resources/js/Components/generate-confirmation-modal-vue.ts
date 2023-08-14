// ./src/generators/jetstream/resources/js/Components/generate-confirmation-modal-vue.test.ts

export default function (): string {

return `<!-- ./resources/js/Components/ConfirmationModal.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { defineComponent } from 'vue'

    import Modal from './Modal.vue'

    export default defineComponent({

        emits: ['close'],

        components: { Modal },

        props: {
            show: {
                type: Boolean,
                default: false,
            },
            maxWidth: {
                type: String as PropType<'sm'|'md'|'lg'|'xl'|'2xl'>,
                default: '2xl',
            },
            closeable: {
                type: Boolean,
                default: true,
            },
        },

        setup (props, context) {

            const close = () => {
                if (props.maxWidth.length > 0) {
                    context.emit('close')
                }
            }

            return { close }

        },

    })

</script>

<template>

    <Modal
        :show="show"
        :max-width="maxWidth"
        :closeable="closeable"
        @close="close"
    >

        <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

            <div class="sm:flex sm:items-start">

                <div class="mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>

                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                    <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                        <slot name="title" />
                    </h3>

                    <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        <slot name="content" />
                    </div>

                </div>

            </div>

        </div>

        <div class="flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right">
            <slot name="footer" />
        </div>

    </Modal>

</template>
`;

}
