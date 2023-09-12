// ./src/generators/jetstream/resources/js/Components/generate-banner-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/Banner.vue -->

<script lang="ts">

    import type { UsePageSharedDataProps } from '../Types/app-jetstream-types'

    import { computed, defineComponent, ref, watch } from 'vue'
    import { usePage } from '@inertiajs/vue3'

    import VvButton from './vv/buttons/VvButton.vue'
    import VvEl from './vv/elements/VvEl.vue'

    export default defineComponent({

        components: {
            VvButton,
            VvEl,
        },

        setup () {

            const pageProps = computed( () => usePage().props as UsePageSharedDataProps )

            const show = ref(true)

            const style = computed( () => pageProps.value.jetstream.flash.bannerStyle || 'success' )

            const message = computed( () => pageProps.value.jetstream.flash.banner || '' )

            watch(message, async () => {
                show.value = true
            })

            return {
                message,
                show,
                style,
            }

        },

    })

</script>

<template>

    <div>

        <VvEl
            v-if="show && message"
            ground-palette="default"
            :ground-color="style === 'danger' ? 'error' : 'secondary'"
        >

            <div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8">

                <div class="flex items-center justify-between flex-wrap">

                    <div class="w-0 flex-1 flex items-center min-w-0">

                        <span
                            class="flex p-2 rounded-lg bg-black bg-opacity-15"
                        >
                            <svg
                                v-if="style == 'success'"
                                class="h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                v-if="style == 'danger'"
                                class="h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                />
                            </svg>
                        </span>

                        <p class="ml-3 font-medium text-sm truncate">
                            {{ message }}
                        </p>

                    </div>

                    <div class="shrink-0 sm:ml-3">

                        <VvButton
                            class="-mr-1 flex rounded-md sm:-mr-2"
                            palette="outline"
                            color="secondary"
                            aria-label="Dismiss"
                            @click.prevent="show = false"
                        >
                            <svg
                                class="h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </VvButton>

                    </div>

                </div>

            </div>

        </VvEl>

    </div>

</template>
`;

}
