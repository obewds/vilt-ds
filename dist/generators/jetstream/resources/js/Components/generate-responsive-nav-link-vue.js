// ./src/generators/jetstream/resources/js/Components/generate-responsive-nav-link-vue.ts
export default function () {
    return `<!-- ./resources/js/Components/ResponsiveNavLink.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { computed, defineComponent } from 'vue'
    import { Link } from '@inertiajs/vue3'

    export default defineComponent({

        components: {
            Link,
        },

        props: {
            active: {
                type: Boolean,
                default: false,
            },
            as: {
                type: String as PropType<'button'|'inertiaLink'>,
                default: 'inertiaLink',
            },
            href: {
                type: String,
                default: '/',
            },
        },

        setup (props) {

            const classes = computed(() => {
                const shared = 'block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium focus:outline-none transition duration-150 ease-in-out'
                return props.active === true
                    ? shared + ' border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300'
                    : shared + ' border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600';
            });

            return {
                classes,
            }
        }

    })

</script>

<template>
    <div>
        <button v-if="as == 'button'" :class="classes" class="w-full text-left">
            <slot />
        </button>

        <Link v-else-if="as == 'inertiaLink'" :href="href" :class="classes">
            <slot />
        </Link>
    </div>
</template>
`;
}
//# sourceMappingURL=generate-responsive-nav-link-vue.js.map