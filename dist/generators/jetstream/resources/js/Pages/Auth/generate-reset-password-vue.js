// ./src/generators/jetstream/resources/js/Pages/Auth/generate-reset-password-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Auth/ResetPassword.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { Head, useForm } from '@inertiajs/vue3'
    import route from 'ziggy-js'

    import AuthenticationCard from '../../Components/AuthenticationCard.vue'
    import AuthenticationCardLogo from '../../Components/AuthenticationCardLogo.vue'
    import PrimaryButton from '../../Components/PrimaryButton.vue'
    import ScrollUpColorModeSection from '../../Components/ScrollUpColorModeSection.vue'
    import VvFormGroup from '../../Components/vv/forms/VvFormGroup.vue'
    import VvInput from '../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            AuthenticationCard,
            AuthenticationCardLogo,
            Head,
            PrimaryButton,
            ScrollUpColorModeSection,
            VvFormGroup,
            VvInput,
        },

        props: {
            email: {
                type: String,
                default: '',
            },
            token: {
                type: String,
                default: '',
            },
        },

        setup (props) {

            const form = useForm({
                token: props.token,
                email: props.email,
                password: '',
                password_confirmation: '',
            })

            const submit = () => {
                form.post(route('password.update'), {
                    onFinish: () => form.reset('password', 'password_confirmation'),
                })
            }

            return {
                form,
                submit,
            }

        },

    })

</script>

<template>

    <Head title="Reset Password" />

    <AuthenticationCard>

        <template #logo>
            <AuthenticationCardLogo />
        </template>

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
                        required
                        autofocus
                        placeholder="email@example.com"
                        autocomplete="username"
                        class="rounded-lg"
                    />
                </VvFormGroup>

            </div>

            <div class="mt-4">

                <VvFormGroup
                    label="Password:"
                    label-for="password"
                    :display-error="form.errors.password !== ''"
                    :error-text="form.errors.password"
                >
                    <VvInput
                        id="password"
                        v-model="form.password"
                        type="password"
                        placeholder="•••••••••••••••"
                        required
                        autocomplete="new-password"
                        class="rounded-lg"
                    />
                </VvFormGroup>

            </div>

            <div class="mt-4">

                <VvFormGroup
                    label="Confirm Password:"
                    label-for="password_confirmation"
                    :display-error="form.errors.password_confirmation !== ''"
                    :error-text="form.errors.password_confirmation"
                >
                    <VvInput
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        type="password"
                        placeholder="•••••••••••••••"
                        required
                        autocomplete="new-password"
                        class="rounded-lg"
                    />
                </VvFormGroup>

            </div>

            <div class="flex items-center justify-end mt-4">

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Reset Password
                </PrimaryButton>

            </div>

        </form>

    </AuthenticationCard>

    <ScrollUpColorModeSection/>

</template>
`;
}
//# sourceMappingURL=generate-reset-password-vue.js.map