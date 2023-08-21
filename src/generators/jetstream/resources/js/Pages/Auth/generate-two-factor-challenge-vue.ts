// ./src/generators/jetstream/resources/js/Pages/Auth/generate-two-factor-challenge-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Auth/TwoFactorChallenge.vue -->

<script lang="ts">

    import { defineComponent, nextTick, ref } from 'vue'
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

        setup () {

            const recovery = ref(false)

            const form = useForm({
                code: '',
                recovery_code: '',
            })

            const recoveryCodeInput = ref<null|HTMLInputElement>(null)
            const codeInput = ref<null|HTMLInputElement>(null)

            const toggleRecovery = async () => {

                // recovery.value ^= true
                recovery.value = true

                await nextTick()

                if (recovery.value && recoveryCodeInput.value) {

                    recoveryCodeInput.value.focus()

                    form.code = ''

                } else {

                    if (codeInput.value) {
                        codeInput.value.focus()
                    }

                    form.recovery_code = ''
                }
            }

            const submit = () => {
                form.post(route('two-factor.login'))
            }

            return {
                form,
                recovery,
                submit,
                toggleRecovery,
            }

        },

    })

</script>

<template>

    <Head title="Two-factor Confirmation" />

    <AuthenticationCard>

        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">

            <template v-if="! recovery">
                Please confirm access to your account by entering the authentication code provided by your authenticator application.
            </template>

            <template v-else>
                Please confirm access to your account by entering one of your emergency recovery codes.
            </template>

        </div>

        <form @submit.prevent="submit">

            <div v-if="! recovery">

                <InputLabel for="code" value="Code" />

                <TextInput
                    id="code"
                    ref="codeInput"
                    v-model="form.code"
                    type="text"
                    inputmode="numeric"
                    class="mt-1 block w-full"
                    autofocus
                    autocomplete="one-time-code"
                />

                <InputError class="mt-2" :message="form.errors.code" />

            </div>

            <div v-else>

                <InputLabel for="recovery_code" value="Recovery Code" />

                <TextInput
                    id="recovery_code"
                    ref="recoveryCodeInput"
                    v-model="form.recovery_code"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="one-time-code"
                />

                <InputError class="mt-2" :message="form.errors.recovery_code" />

            </div>

            <div class="flex items-center justify-end mt-4">

                <button type="button" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer" @click.prevent="toggleRecovery">

                    <template v-if="! recovery">
                        Use a recovery code
                    </template>

                    <template v-else>
                        Use an authentication code
                    </template>

                </button>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>

            </div>

        </form>

    </AuthenticationCard>

    <ScrollUpColorModeSection/>

</template>
`;

}
