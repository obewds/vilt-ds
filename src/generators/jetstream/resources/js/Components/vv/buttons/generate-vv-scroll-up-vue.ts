// ./src/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-scroll-up-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/vv/buttons/VvScrollUp.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPaletteColors, SizesButtons } from '@obewds/vueventus'

    import { defineComponent, onMounted, ref } from 'vue'
    import { TransitionChild, TransitionRoot } from '@headlessui/vue'
    import appVv from '../../../app.vv'
    import gsap from 'gsap'
    import { VvButton as LibVvButton } from '@obewds/vueventus'

    export default defineComponent({

        components: {
            TransitionChild,
            TransitionRoot,
            LibVvButton,
        },

        props: {
            buttonClasses: {
                type: String,
                default: appVv.defaults.VvScrollUp.buttonClasses,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvScrollUp.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvScrollUp.debug,
            },
            fab: {
                type: Boolean,
                default: appVv.defaults.VvScrollUp.fab,
            },
            isVisible: {
                type: Boolean,
                default: appVv.defaults.VvScrollUp.isVisible,
            },
            offsetMinimum: {
                type: Number,
                default: appVv.defaults.VvScrollUp.offsetMinimum,
            },
            palette: {
                type: String as PropType<keyof DefaultButtonPalettes>,
                default: appVv.defaults.VvScrollUp.palette,
            },
            size: {
                type: String as PropType<keyof SizesButtons>,
                default: appVv.defaults.VvScrollUp.size,
            },
            title: {
                type: String,
                default: appVv.defaults.VvScrollUp.title,
            },
        },

        setup (props) {

            const isVisible = ref(props.isVisible)

            onMounted(() => {
                window.addEventListener('scroll', function(){
                    isVisible.value = window.pageYOffset > props.offsetMinimum
                })
            })

            return { isVisible }

        },

        methods: {

            scrollToTop () {
                // GSAP ScrollToPlugin
                gsap.to(window, {
                    duration: 0.3,
                    scrollTo: {
                        y: 0,
                        x: 0,
                    },
                })
            }

        },

    })

</script>

<template>

    <TransitionRoot appear :show="isVisible">

        <div>

            <TransitionChild
                enter="transform transition ease-out duration-300"
                enter-from="-translate-y-full opacity-0"
                enter-to="translate-y-0 opacity-100"
                leave="transform transition ease-in duration-300"
                leave-from="translate-y-0 opacity-100"
                leave-to="-translate-y-full opacity-0"
            >

                <div>

                    <LibVvButton
                        :debug="debug"
                        :title="title"
                        :palette="palette"
                        :color="color"
                        :class="buttonClasses"
                        @click="scrollToTop()"
                        :fab="fab"
                        :size="size"
                        :data-vv-scroll-up-prop-button-classes="debug ? buttonClasses : null"
                        :data-vv-scroll-up-prop-color="debug ? color : null"
                        :data-vv-scroll-up-prop-fab="debug ? fab : null"
                        :data-vv-scroll-up-prop-palette="debug ? palette : null"
                        :data-vv-scroll-up-prop-is-visible="debug ? isVisible : null"
                        :data-vv-scroll-up-prop-offset-minimum="debug ? offsetMinimum : null"
                        :data-vv-scroll-up-prop-size="debug ? size : null"
                        :data-vv-scroll-up-prop-title="debug ? title : null"
                    >
                        <slot>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        </slot>
                    </LibVvButton>

                </div>

            </TransitionChild>

        </div>

    </TransitionRoot>

</template>
`;

}
