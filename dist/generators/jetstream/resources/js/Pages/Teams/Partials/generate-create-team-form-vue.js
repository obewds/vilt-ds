// ./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-create-team-form-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Teams/Partials/CreateTeamForm.vue -->

<script lang="ts">

    import type { UsePageSharedDataProps } from '../../../Types/app-jetstream-types'

    import { computed, defineComponent } from 'vue'
    import { useForm, usePage } from '@inertiajs/vue3'
    import FormSection from '../../../Components/FormSection.vue'
    import InputError from '../../../Components/InputError.vue'
    import InputLabel from '../../../Components/InputLabel.vue'
    import PrimaryButton from '../../../Components/PrimaryButton.vue'
    import TextInput from '../../../Components/TextInput.vue'

    export default defineComponent({

        components: {
            FormSection,
            InputError,
            InputLabel,
            PrimaryButton,
            TextInput,
        },

        setup () {

            const pageProps = computed( () => usePage().props as UsePageSharedDataProps )

            const form = useForm({
                name: '',
            })

            const createTeam = () => {
                form.post( route('teams.store'), {
                    errorBag: 'createTeam',
                    preserveScroll: true,
                })
            }

            return {
                createTeam,
                form,
                pageProps,
            }

        },

    })

</script>

<template>

    <FormSection @submitted="createTeam">

        <template #title>
            Team Details
        </template>

        <template #description>
            Create a new team to collaborate with others on projects.
        </template>

        <template #form>

            <div class="col-span-6">

                <InputLabel value="Team Owner" />

                <div class="flex items-center mt-2">

                    <img class="object-cover w-12 h-12 rounded-full" :src="pageProps.auth.user.profile_photo_url" :alt="pageProps.auth.user.name">

                    <div class="ml-4 leading-tight">
                        <div class="text-gray-900 dark:text-white">{{ pageProps.auth.user.name }}</div>
                        <div class="text-sm text-gray-700 dark:text-gray-300">
                            {{ pageProps.auth.user.email }}
                        </div>
                    </div>

                </div>

            </div>

            <div class="col-span-6 sm:col-span-4">

                <InputLabel for="name" value="Team Name" />

                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />

                <InputError :message="form.errors.name" class="mt-2" />

            </div>

        </template>

        <template #actions>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Create
            </PrimaryButton>
        </template>

    </FormSection>

</template>
`;
}
//# sourceMappingURL=generate-create-team-form-vue.js.map