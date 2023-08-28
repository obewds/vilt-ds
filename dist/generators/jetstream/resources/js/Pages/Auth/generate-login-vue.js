// ./src/generators/jetstream/resources/js/Pages/Auth/generate-login-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Auth/Login.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { Head, useForm } from '@inertiajs/vue3'
    import route from 'ziggy-js'

    import AuthenticationCard from '../../Components/AuthenticationCard.vue'
    import AuthenticationCardLogo from '../../Components/AuthenticationCardLogo.vue'

    import ScrollUpColorModeSection from '../../Components/ScrollUpColorModeSection.vue'
    import VvButton from '../../Components/vv/buttons/VvButton.vue'
    import VvCheckbox from '../../Components/vv/inputs/VvCheckbox.vue'
    import VvFormGroup from '../../Components/vv/forms/VvFormGroup.vue'
    import VvInertiaLink from '../../Components/vv/anchors/VvInertiaLink.vue'
    import VvInput from '../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            AuthenticationCard,
            AuthenticationCardLogo,
            Head,
            ScrollUpColorModeSection,
            VvButton,
            VvCheckbox,
            VvFormGroup,
            VvInertiaLink,
            VvInput,
        },

        props: {
            canResetPassword: {
                type : Boolean,
                default: false,
            },
            status: {
                type : String,
                default: '',
            },
        },

        setup () {

            const form = useForm({
                email: '',
                password: '',
                remember: false,
            })

            const submit = () => {
                form.transform(data => ({
                    ...data,
                    remember: form.remember ? 'on' : '',
                })).post(route('login'), {
                    onFinish: () => form.reset('password'),
                })
            };

            return {
                form,
                route,
                submit,
            }

        },

    })

</script>

<template>

    <Head title="Log in" />

    <AuthenticationCard>

        <template #logo>
            <div class="text-center">
                <AuthenticationCardLogo/>
            </div>
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            {{ status }}
        </div>

        <div class="py-2 text-center text-sm">
            Login below or create a <VvInertiaLink
                v-if="canResetPassword"
                :href="route('register')"
            >
                new account
            </VvInertiaLink>!
        </div>

        <form @submit.prevent="submit" >

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
                        autocomplete="current-password"
                        class="rounded-lg"
                    />
                </VvFormGroup>
            </div>

            <div class="flex items-center gap-2 pt-4">
                <VvCheckbox
                    id="remember"
                    color="primary"
                    v-model="form.remember"
                />
                <label for="remember">Remember me</label>
            </div>

            <div class="flex items-center justify-end mt-4">

                <VvInertiaLink
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="text-sm"
                >
                    Forgot your password?
                </VvInertiaLink>

                <VvButton
                    :class="['ml-4 rounded', form.processing ?? 'opacity-25']"
                    :disabled="form.processing"
                    color="primary"
                    type="submit"
                >
                    Log in
                </VvButton>

            </div>

        </form>

    </AuthenticationCard>

    <ScrollUpColorModeSection/>

</template>
`;
}
//# sourceMappingURL=generate-login-vue.js.map