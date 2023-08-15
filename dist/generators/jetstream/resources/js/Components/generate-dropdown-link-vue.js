// ./src/generators/jetstream/resources/js/Components/generate-dropdown-link-vue.ts
export default function () {
    return `<!-- ./resources/js/Components/DropdownLink.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { defineComponent } from 'vue'
    import { Link } from '@inertiajs/vue3'

    export default defineComponent({

        components: {
            Link,
        },

        props: {
            as: {
                type: String as PropType<'button'|'a'|'inertiaLink'>,
                default: 'inertiaLink',
            },
            href: {
                type: String,
                default: '/',
            }
        },

        setup () {

            const classes = 'block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out'

            return {
                classes,
            }

        },

    })

</script>

<template>

    <div>

        <button
            v-if="as === 'button'"
            type="submit"
            :class="['w-full text-left', classes]"
        >
            <slot></slot>
        </button>

        <a
            v-else-if="as === 'a'"
            :href="href"
            :class="classes"
        >
            <slot></slot>
        </a>

        <Link
            v-else-if="as === 'inertiaLink'"
            :href="href"
            :class="classes"
        >
            <slot></slot>
        </Link>

    </div>

</template>
`;
}
//# sourceMappingURL=generate-dropdown-link-vue.js.map