// ./src/generators/jetstream/resources/js/Pages/Profile/generate-profile-show-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Profile/Show.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { JetstreamSessionData, UsePageSharedDataProps } from '../../Types/app-jetstream-types'

    import { computed, defineComponent } from 'vue'
    import { usePage } from '@inertiajs/vue3'

    import AppLayout from '../../Layouts/AppLayout.vue'
    import DeleteUserForm from '../..//Pages/Profile/Partials/DeleteUserForm.vue'
    import LogoutOtherBrowserSessionsForm from '../..//Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue'
    import SectionBorder from '../..//Components/SectionBorder.vue'
    import TwoFactorAuthenticationForm from '../..//Pages/Profile/Partials/TwoFactorAuthenticationForm.vue'
    import UpdatePasswordForm from '../..//Pages/Profile/Partials/UpdatePasswordForm.vue'
    import UpdateProfileInformationForm from '../..//Pages/Profile/Partials/UpdateProfileInformationForm.vue'

    export default defineComponent({

        components: {
            AppLayout,
            DeleteUserForm,
            LogoutOtherBrowserSessionsForm,
            SectionBorder,
            TwoFactorAuthenticationForm,
            UpdatePasswordForm,
            UpdateProfileInformationForm,
        },

        props: {
            confirmsTwoFactorAuthentication: {
                type: Boolean,
                default: false,
            },
            sessions: {
                type: Array as PropType<Array<JetstreamSessionData>>,
                default: [],
            },
        },

        setup () {

            const pageProps = computed( () => usePage().props as UsePageSharedDataProps )

            return {
                pageProps,
            }

        },
    })

</script>

<template>

    <AppLayout title="Profile">

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Profile
            </h2>
        </template>

        <div>

            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                <div v-if="pageProps.jetstream.canUpdateProfileInformation">
                    <UpdateProfileInformationForm :user="pageProps.auth.user" />

                    <SectionBorder />
                </div>

                <div v-if="pageProps.jetstream.canUpdatePassword">
                    <UpdatePasswordForm class="mt-10 sm:mt-0" />

                    <SectionBorder />
                </div>

                <div v-if="pageProps.jetstream.canManageTwoFactorAuthentication">
                    <TwoFactorAuthenticationForm
                        :requires-confirmation="confirmsTwoFactorAuthentication"
                        class="mt-10 sm:mt-0"
                    />

                    <SectionBorder />
                </div>

                <LogoutOtherBrowserSessionsForm :sessions="sessions" class="mt-10 sm:mt-0" />

                <template v-if="pageProps.jetstream.hasAccountDeletionFeatures">
                    <SectionBorder />

                    <DeleteUserForm class="mt-10 sm:mt-0" />
                </template>

            </div>

        </div>

    </AppLayout>

</template>
`;

}
