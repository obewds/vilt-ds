// ./src/generators/jetstream/resources/js/Components/generate-modal-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/Modal.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { computed, defineComponent, onMounted, onUnmounted, watch } from 'vue'

    export default defineComponent({

        emits: ['close'],

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

            watch(() => props.show, () => {
                if (props.show) {
                    document.body.style.overflow = 'hidden'
                } else {
                    document.body.style.overflow = 'auto'
                }
            })

            const close = () => {
                if (props.closeable) {
                    context.emit('close')
                }
            }

            const closeOnEscape = (e:KeyboardEvent) => {
                if (e.key === 'Escape' && props.show) {
                    close()
                }
            }

            onMounted(() => document.addEventListener('keydown', closeOnEscape))

            onUnmounted(() => {
                document.removeEventListener('keydown', closeOnEscape)
                document.body.style.overflow = 'auto'
            })

            const maxWidthClass = computed(() => {
                return {
                    'sm': 'sm:max-w-sm',
                    'md': 'sm:max-w-md',
                    'lg': 'sm:max-w-lg',
                    'xl': 'sm:max-w-xl',
                    '2xl': 'sm:max-w-2xl',
                }[props.maxWidth];
            });

            return {
                close,
                maxWidthClass,
            }

        },

    })

</script>

<template>

    <teleport to="body">

        <transition leave-active-class="duration-200">

            <div v-show="show" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region>

                <transition
                    enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-show="show" class="fixed inset-0 transform transition-all" @click="close">
                        <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75" />
                    </div>
                </transition>

                <transition
                    enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div v-show="show" class="mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto" :class="maxWidthClass">
                        <slot v-if="show" />
                    </div>
                </transition>

            </div>

        </transition>

    </teleport>

</template>
`;

}
