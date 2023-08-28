// ./src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-password-form-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue -->

<script lang="ts">

    import { defineComponent, ref } from 'vue'
    import { useForm } from '@inertiajs/vue3'
    import ActionMessage from '../../../Components/ActionMessage.vue'
    import FormSection from '../../../Components/FormSection.vue'
    import InputError from '../../../Components/InputError.vue'
    import InputLabel from '../../../Components/InputLabel.vue'
    import PrimaryButton from '../../../Components/PrimaryButton.vue'
    import VvFormGroup from '../../../Components/vv/forms/VvFormGroup.vue'
    import VvInput from '../../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            ActionMessage,
            FormSection,
            InputError,
            InputLabel,
            PrimaryButton,
            VvFormGroup,
            VvInput,
        },

        setup () {

            const passwordInput = ref<null|HTMLInputElement>(null)
            const currentPasswordInput = ref<null|HTMLInputElement>(null)

            const form = useForm({
                current_password: '',
                password: '',
                password_confirmation: '',
            })

            const updatePassword = () => {
                form.put(route('user-password.update'), {
                    errorBag: 'updatePassword',
                    preserveScroll: true,
                    onSuccess: () => form.reset(),
                    onError: () => {
                        if (form.errors.password) {
                            form.reset('password', 'password_confirmation')
                            passwordInput.value?.focus()
                        }

                        if (form.errors.current_password) {
                            form.reset('current_password')
                            currentPasswordInput.value?.focus()
                        }
                    },
                })
            }

            return {
                form,
                updatePassword,
            }

        },

    })

</script>

<template>

    <FormSection @submitted="updatePassword">

        <template #title>
            Update Password
        </template>

        <template #description>
            Ensure your account is using a long, random password to stay secure.
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-4">

                <VvFormGroup
                    label="Current Password:"
                    label-for="current_password"
                    :display-error="form.errors.current_password !== ''"
                    :error-text="form.errors.current_password"
                >
                    <VvInput
                        id="current_password"
                        ref="currentPasswordInput"
                        v-model="form.current_password"
                        type="password"
                        placeholder="•••••••••••••••"
                        required
                        autocomplete="current-password"
                        class="rounded-lg"
                    />
                </VvFormGroup>

            </div>

            <div class="col-span-6 sm:col-span-4">

                <VvFormGroup
                    label="New Password:"
                    label-for="password"
                    :display-error="form.errors.password !== ''"
                    :error-text="form.errors.password"
                >
                    <VvInput
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        placeholder="•••••••••••••••"
                        required
                        autocomplete="new-password"
                        class="rounded-lg"
                    />
                </VvFormGroup>

            </div>

            <div class="col-span-6 sm:col-span-4">

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

        </template>

        <template #actions>

            <ActionMessage
                :on="form.recentlySuccessful"
                class="mr-3"
            >
                Saved.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>

        </template>

    </FormSection>

</template>
`;
}
//# sourceMappingURL=generate-update-password-form-vue.js.map