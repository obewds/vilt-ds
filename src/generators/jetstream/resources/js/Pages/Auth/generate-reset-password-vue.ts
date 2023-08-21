// ./src/generators/jetstream/resources/js/Pages/Auth/generate-reset-password-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Auth/ResetPassword.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { Head, useForm } from '@inertiajs/vue3'
    import route from 'ziggy-js'

    import AuthenticationCard from '../../Components/AuthenticationCard.vue'
    import AuthenticationCardLogo from '../../Components/AuthenticationCardLogo.vue'
    import InputError from '../../Components/InputError.vue'
    import InputLabel from '../../Components/InputLabel.vue'
    import PrimaryButton from '../../Components/PrimaryButton.vue'
    import ScrollUpColorModeSection from '../../Components/ScrollUpColorModeSection.vue'
    import TextInput from '../../Components/TextInput.vue'

    export default defineComponent({

        components: {
            AuthenticationCard,
            AuthenticationCardLogo,
            Head,
            InputError,
            InputLabel,
            PrimaryButton,
            ScrollUpColorModeSection,
            TextInput,
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

                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />

            </div>

            <div class="mt-4">

                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />

            </div>

            <div class="mt-4">

                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password_confirmation" />

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
