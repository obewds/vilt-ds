// ./src/generators/jetstream/resources/js/Components/generate-confirms-password-vue.ts

export default function (): string {

return `<!-- ./resources/js/Components/ConfirmsPassword.vue -->

<script lang="ts">

    import { defineComponent, nextTick, ref, reactive } from 'vue'
    import axios from 'axios'
    import route from 'ziggy-js'

    import DialogModal from './DialogModal.vue'
    import InputError from './InputError.vue'
    import PrimaryButton from './PrimaryButton.vue'
    import SecondaryButton from './SecondaryButton.vue'
    import TextInput from './TextInput.vue'

    export default defineComponent({

        emits: ['confirmed'],

        components: {
            DialogModal,
            InputError,
            PrimaryButton,
            SecondaryButton,
            TextInput,
        },

        props: {
            title: {
                type: String,
                default: 'Confirm Password',
            },
            content: {
                type: String,
                default: 'For your security, please confirm your password to continue.',
            },
            button: {
                type: String,
                default: 'Confirm',
            },
        },

        setup ({}, context) {

            const confirmingPassword = ref(false)

            const form = reactive({
                password: '',
                error: '',
                processing: false,
            })

            const passwordInput = ref<null|HTMLInputElement>(null)

            const startConfirmingPassword = () => {

                axios.get(route('password.confirmation')).then(response => {

                    if (response.data.confirmed) {

                        context.emit('confirmed')

                    } else {

                        confirmingPassword.value = true;

                        setTimeout(() => {
                            if (passwordInput.value) {
                                passwordInput.value.focus()
                            }
                        }, 250)

                    }

                })

            }

            const confirmPassword = () => {

                form.processing = true

                axios.post(route('password.confirm'), {
                    password: form.password,
                }).then(() => {

                    form.processing = false
                    closeModal()
                    nextTick().then(() => context.emit('confirmed'))

                }).catch(error => {

                    form.processing = false
                    form.error = error.response.data.errors.password[0]
                    if (passwordInput.value) {
                        passwordInput.value.focus()
                    }

                })

            }

            const closeModal = () => {

                confirmingPassword.value = false
                form.password = ''
                form.error = ''

            }

            return {
                closeModal,
                confirmingPassword,
                confirmPassword,
                form,
                startConfirmingPassword,
            }

        },

    })

</script>

<template>

    <span>

        <span @click="startConfirmingPassword">
            <slot />
        </span>

        <DialogModal :show="confirmingPassword" @close="closeModal">

            <template #title>
                {{ title }}
            </template>

            <template #content>

                {{ content }}

                <div class="mt-4">

                    <TextInput
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Password"
                        autocomplete="current-password"
                        @keyup.enter="confirmPassword"
                    />

                    <InputError :message="form.error" class="mt-2" />

                </div>

            </template>

            <template #footer>

                <SecondaryButton @click="closeModal">
                    Cancel
                </SecondaryButton>

                <PrimaryButton
                    class="ml-3"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="confirmPassword"
                >
                    {{ button }}
                </PrimaryButton>

            </template>

        </DialogModal>

    </span>

</template>
`;

}
