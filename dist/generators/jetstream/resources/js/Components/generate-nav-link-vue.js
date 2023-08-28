// ./src/generators/jetstream/resources/js/Components/generate-nav-link-vue.ts
export default function () {
    return `<!-- ./resources/js/Components/NavLink.vue -->

<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import { Link } from '@inertiajs/vue3'

    export default defineComponent({

        components: {
            Link,
        },

        props: {
            href: {
                type: String,
                default: '/',
            },
            active: {
                type: Boolean,
                default: false,
            },
        },

        setup (props) {

            const classes = computed(() => {
                const shared = 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out'
                return props.active === true
                    ? shared + ' border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700'
                    : shared + ' border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700';
            })

            return {
                classes,
            }

        }

    })

</script>

<template>

    <Link :href="href" :class="classes">
        <slot />
    </Link>

</template>
`;
}
//# sourceMappingURL=generate-nav-link-vue.js.map