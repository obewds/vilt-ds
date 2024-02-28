// ./src/generators/jetstream/resources/js/Pages/Auth/generate-verify-email-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Auth/VerifyEmail.vue -->

<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import { Head, Link, useForm } from '@inertiajs/vue3'
    import { route } from '../../../../vendor/tightenco/ziggy'
    import AuthenticationCard from '../../Components/AuthenticationCard.vue'
    import AuthenticationCardLogo from '../../Components/AuthenticationCardLogo.vue'
    import PrimaryButton from '../../Components/PrimaryButton.vue'
    import ScrollUpColorModeSection from '../../Components/ScrollUpColorModeSection.vue'

    export default defineComponent({

        components: {
            AuthenticationCard,
            AuthenticationCardLogo,
            Head,
            Link,
            PrimaryButton,
            ScrollUpColorModeSection,
        },

        props: {
            status: {
                type: String,
                default: '',
            },
        },

        setup (props) {

            const form = useForm({})

            const submit = () => {
                form.post(route('verification.send'))
            }

            const verificationLinkSent = computed(() => props.status === 'verification-link-sent')

            return {
                form,
                route,
                submit,
                verificationLinkSent,
            }

        },

    })

</script>

<template>

    <Head title="Email Verification" />

    <AuthenticationCard>

        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
        </div>

        <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            A new verification link has been sent to the email address you provided in your profile settings.
        </div>

        <form @submit.prevent="submit">

            <div class="mt-4 flex items-center justify-between">

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Resend Verification Email
                </PrimaryButton>

                <div>

                    <Link
                        :href="route('profile.show')"
                        class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Edit Profile
                    </Link>

                    <Link
                        :href="route('logout')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ml-2"
                    >
                        Log Out
                    </Link>

                </div>

            </div>

        </form>

    </AuthenticationCard>

    <ScrollUpColorModeSection/>

</template>
`;
}
//# sourceMappingURL=generate-verify-email-vue.js.map