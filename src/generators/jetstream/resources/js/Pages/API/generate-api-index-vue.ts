// ./src/generators/jetstream/resources/js/Pages/API/generate-api-index-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/API/Index.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { JetstreamApiPermission, JetstreamApiTokenData } from '../../Types/app-jetstream-types'

    import { defineComponent } from 'vue'
    import ApiTokenManager from '../../Pages/API/Partials/ApiTokenManager.vue'
    import AppLayout from '../../Layouts/AppLayout.vue'

    export default defineComponent({

        components: {
            ApiTokenManager,
            AppLayout,
        },

        props: {
            tokens: {
                type: Array as PropType<Array<JetstreamApiTokenData>>,
                default: [],
            },
            availablePermissions: {
                type: Array as PropType<Array<JetstreamApiPermission>>,
                default: [],
            },
            defaultPermissions: {
                type: Array as PropType<Array<JetstreamApiPermission>>,
                default: [],
            },
        },

    })

</script>

<template>

    <AppLayout title="API Tokens">

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                API Tokens
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <ApiTokenManager
                    :tokens="tokens"
                    :available-permissions="availablePermissions"
                    :default-permissions="defaultPermissions"
                />
            </div>
        </div>

    </AppLayout>

</template>
`;

}
