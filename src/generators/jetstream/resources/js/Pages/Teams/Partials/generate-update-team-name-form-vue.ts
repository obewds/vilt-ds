// ./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-update-team-name-form-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { JetstreamTeamData, JetstreamTeamPermissionsData } from '../../../Types/app-jetstream-types'

    import { defineComponent } from 'vue'
    import { useForm } from '@inertiajs/vue3'

    import ActionMessage from '../../../Components/ActionMessage.vue'
    import FormSection from '../../../Components/FormSection.vue'
    import InputLabel from '../../../Components/InputLabel.vue'
    import PrimaryButton from '../../../Components/PrimaryButton.vue'
    import VvFormGroup from '../../../Components/vv/forms/VvFormGroup.vue'
    import VvInput from '../../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            ActionMessage,
            FormSection,
            InputLabel,
            PrimaryButton,
            VvFormGroup,
            VvInput,
        },

        props: {
            team: {
                type: Object as PropType<JetstreamTeamData>,
                default: {},
            },
            permissions: {
                type: Object as PropType<JetstreamTeamPermissionsData>,
                default: {
                    canAddTeamMembers: false,
                    canDeleteTeam: false,
                    canRemoveTeamMembers: false,
                    canUpdateTeam: false,
                    canUpdateTeamMembers: false,
                },
            },
        },

        setup (props) {

            const form = useForm({
                name: props.team.name,
            })

            const updateTeamName = () => {
                form.put( route('teams.update', props.team), {
                    errorBag: 'updateTeamName',
                    preserveScroll: true,
                })
            }

            return {
                form,
                updateTeamName,
            }
        },

    })

</script>

<template>

    <FormSection @submitted="updateTeamName">

        <template #title>
            Team Name
        </template>

        <template #description>
            The team's name and owner information.
        </template>

        <template #form>

            <!-- Team Owner Information -->
            <div class="col-span-6">

                <InputLabel value="Team Owner" />

                <div class="flex items-center mt-2">

                    <img class="w-12 h-12 rounded-full object-cover" :src="team.owner.profile_photo_url" :alt="team.owner.name">

                    <div class="ml-4 leading-tight">
                        <div class="text-gray-900 dark:text-white">{{ team.owner.name }}</div>
                        <div class="text-gray-700 dark:text-gray-300 text-sm">
                            {{ team.owner.email }}
                        </div>
                    </div>

                </div>

            </div>

            <!-- Team Name -->
            <div class="col-span-6 sm:col-span-4">

                <VvFormGroup
                    label="Team Name:"
                    label-for="name"
                    :display-error="form.errors.name !== ''"
                    :error-text="form.errors.name"
                >
                    <VvInput
                        id="name"
                        v-model="form.name"
                        placeholder="Enter Team Name"
                        class="rounded-lg"
                        :disabled="! permissions.canUpdateTeam"
                    />
                </VvFormGroup>

            </div>

        </template>

        <template v-if="permissions.canUpdateTeam" #actions>

            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
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
