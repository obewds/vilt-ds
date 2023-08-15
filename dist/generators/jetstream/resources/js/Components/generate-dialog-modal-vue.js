// ./src/generators/jetstream/resources/js/Components/generate-dialog-modal-vue.ts
export default function () {
    return `<!-- ./resources/js/Components/DialogModal.vue -->

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

        <div class="px-6 py-4">

            <div class="text-lg font-medium text-gray-900 dark:text-gray-100">
                <slot name="title" />
            </div>

            <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <slot name="content" />
            </div>

        </div>

        <div class="flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right">
            <slot name="footer" />
        </div>

    </Modal>

</template>
`;
}
//# sourceMappingURL=generate-dialog-modal-vue.js.map