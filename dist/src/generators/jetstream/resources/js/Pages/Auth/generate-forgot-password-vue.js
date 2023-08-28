// ./src/generators/jetstream/resources/js/Pages/Auth/generate-forgot-password-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Auth/ForgotPassword.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { Head, useForm } from '@inertiajs/vue3'
    import AuthenticationCard from '../../Components/AuthenticationCard.vue'
    import AuthenticationCardLogo from '../../Components/AuthenticationCardLogo.vue'
    import ScrollUpColorModeSection from '../../Components/ScrollUpColorModeSection.vue'
    import VvButton from '../../Components/vv/buttons/VvButton.vue'
    import VvFormGroup from '../../Components/vv/forms/VvFormGroup.vue'
    import VvInput from '../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            AuthenticationCard,
            AuthenticationCardLogo,
            Head,
            ScrollUpColorModeSection,
            VvButton,
            VvFormGroup,
            VvInput,
        },

        props: {
            status: {
                type: String,
                default: '',
            },
        },

        setup () {

            const form = useForm({
                email: '',
            })

            const submit = () => {
                form.post(route('password.email'));
            }

            return {
                form,
                submit,
            }

        },

    })

</script>

<template>

    <Head title="Forgot Password" />

    <AuthenticationCard>

        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm opacity-75">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            {{ status }}
        </div>

        <form @submit.prevent="submit">

            <div>
                <VvFormGroup
                    label="Email:"
                    label-for="email"
                    :display-error="form.errors.email !== ''"
                    :error-text="form.errors.email"
                >
                    <VvInput
                        id="email"
                        v-model="form.email"
                        type="email"
                        placeholder="email@example.com"
                        required
                        autofocus
                        autocomplete="username"
                        class="rounded-lg"
                    />
                </VvFormGroup>
            </div>

            <div class="flex items-center justify-end pt-6">

                <VvButton
                    :class="['rounded', form.processing ?? 'opacity-25']"
                    :disabled="form.processing"
                    color="primary"
                    type="submit"
                >
                    Email Password Reset Link
                </VvButton>

            </div>

        </form>

    </AuthenticationCard>

    <ScrollUpColorModeSection/>

</template>
`;
}
//# sourceMappingURL=generate-forgot-password-vue.js.map