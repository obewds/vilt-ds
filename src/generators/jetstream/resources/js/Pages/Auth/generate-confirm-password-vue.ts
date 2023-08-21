// ./src/generators/jetstream/resources/js/Pages/Auth/generate-confirm-password-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Auth/ConfirmPassword.vue -->

<script lang="ts">

    import { defineComponent, ref } from 'vue'
    import { Head, useForm } from '@inertiajs/vue3'
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

        setup () {

            const form = useForm({
                password: '',
            })

            const passwordInput = ref<null|HTMLInputElement>(null)

            const submit = () => {
                form.post(route('password.confirm'), {
                    onFinish: () => {
                        form.reset()
                        if (passwordInput.value) {
                            passwordInput.value.focus()
                        }
                    },
                })
            }

            return {
                form,
                passwordInput,
                submit,
            }

        },

    })

</script>

<template>

    <Head title="Secure Area" />

    <AuthenticationCard>

        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <form @submit.prevent="submit">

            <div>

                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                    autofocus
                />

                <InputError class="mt-2" :message="form.errors.password" />

            </div>

            <div class="flex justify-end mt-4">
                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Confirm
                </PrimaryButton>
            </div>

        </form>

    </AuthenticationCard>

    <ScrollUpColorModeSection/>

</template>
`;

}
