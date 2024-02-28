// ./src/generators/jetstream/resources/js/Pages/Auth/generate-register-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Auth/Register.vue -->

<script lang="ts">

    import type { UsePageSharedDataProps } from '../../Types/app-jetstream-types'

    import { computed, defineComponent } from 'vue'
    import { Head, useForm, usePage } from '@inertiajs/vue3'
    import { route } from '../../../../vendor/tightenco/ziggy'

    import AuthenticationCard from '../../Components/AuthenticationCard.vue'
    import AuthenticationCardLogo from '../../Components/AuthenticationCardLogo.vue'
    import ScrollUpColorModeSection from '../../Components/ScrollUpColorModeSection.vue'
    import VvAnchor from '../../Components/vv/anchors/VvAnchor.vue'
    import VvButton from '../../Components/vv/buttons/VvButton.vue'
    import VvCheckbox from '../../Components/vv/inputs/VvCheckbox.vue'
    import VvEl from '../../Components/vv/elements/VvEl.vue'
    import VvFormGroup from '../../Components/vv/forms/VvFormGroup.vue'
    import VvInertiaLink from '../../Components/vv/anchors/VvInertiaLink.vue'
    import VvInput from '../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            AuthenticationCard,
            AuthenticationCardLogo,
            Head,
            ScrollUpColorModeSection,
            VvAnchor,
            VvButton,
            VvCheckbox,
            VvEl,
            VvFormGroup,
            VvInertiaLink,
            VvInput,
        },

        setup () {

            const pageProps = computed( () => usePage().props as UsePageSharedDataProps )

            const form = useForm({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms: false,
            })

            const submit = () => {
                form.post(route('register'), {
                    onFinish: () => form.reset('password', 'password_confirmation'),
                })
            }

            return {
                form,
                pageProps,
                route,
                submit,
            }

        },

    })

</script>

<template>

    <Head title="Register" />

    <AuthenticationCard>

        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <form @submit.prevent="submit">

            <VvFormGroup
                label="Name:"
                label-for="name"
                :display-error="form.errors.name !== ''"
                :error-text="form.errors.name"
            >
                <VvInput
                    id="name"
                    v-model="form.name"
                    placeholder="Pat Smith"
                    required
                    autofocus
                    autocomplete="name"
                    class="rounded-lg"
                />
            </VvFormGroup>

            <div class="pt-2">
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

            <div class="pt-2">
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

            <div class="pt-2">
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

            <div
                v-if="pageProps.jetstream.hasTermsAndPrivacyPolicyFeature"
                class="pt-4"
            >
                <div class="flex items-center gap-2">
                    <VvCheckbox
                        id="terms"
                        color="primary"
                        v-model="form.terms"
                        required
                    />
                    <label for="terms">
                        I agree to the
                        <VvAnchor target="_blank" :href="route('terms.show')">
                            Terms of Service
                        </VvAnchor>
                        and
                        <VvAnchor target="_blank" :href="route('policy.show')">
                            Privacy Policy
                        </VvAnchor>
                    </label>
                </div>
                <VvEl v-if="form.errors.terms" text-color="error" class="pt-1">{{ form.errors.terms }}</VvEl>
            </div>

            <div class="flex items-center justify-end mt-4">

                <VvInertiaLink
                    :href="route('login')"
                    class="text-sm"
                >
                    Already registered?
                </VvInertiaLink>

                <VvButton
                    :class="['ml-4 rounded', form.processing ?? 'opacity-25']"
                    :disabled="form.processing"
                    color="primary"
                    type="submit"
                >
                    Register
                </VvButton>

            </div>

        </form>

    </AuthenticationCard>

    <ScrollUpColorModeSection/>

</template>
`;
}
//# sourceMappingURL=generate-register-vue.js.map