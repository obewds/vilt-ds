// ./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-delete-team-form-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Teams/Partials/DeleteTeamForm.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { JetstreamTeamData } from '../../../Types/app-jetstream-types'

    import { defineComponent, ref } from 'vue'
    import { useForm } from '@inertiajs/vue3'

    import ActionSection from '../../../Components/ActionSection.vue'
    import ConfirmationModal from '../../../Components/ConfirmationModal.vue'
    import DangerButton from '../../../Components/DangerButton.vue'
    import SecondaryButton from '../../../Components/SecondaryButton.vue'

    export default defineComponent({

        components: {
            ActionSection,
            ConfirmationModal,
            DangerButton,
            SecondaryButton,
        },

        props: {
            team: {
                type: Object as PropType<JetstreamTeamData>,
                default: {},
            },
        },

        setup (props) {

            const confirmingTeamDeletion = ref(false)
            const form = useForm({})

            const confirmTeamDeletion = () => {
                confirmingTeamDeletion.value = true
            }

            const deleteTeam = () => {
                form.delete( route('teams.destroy', props.team), {
                    errorBag: 'deleteTeam',
                })
            }

            return {
                confirmingTeamDeletion,
                confirmTeamDeletion,
                deleteTeam,
                form,
            }

        },

    })

</script>

<template>

    <ActionSection>

        <template #title>
            Delete Team
        </template>

        <template #description>
            Permanently delete this team.
        </template>

        <template #content>

            <div class="max-w-xl text-sm text-gray-600 dark:text-gray-400">
                Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain.
            </div>

            <div class="mt-5">
                <DangerButton @click="confirmTeamDeletion">
                    Delete Team
                </DangerButton>
            </div>

            <!-- Delete Team Confirmation Modal -->
            <ConfirmationModal :show="confirmingTeamDeletion" @close="confirmingTeamDeletion = false">

                <template #title>
                    Delete Team
                </template>

                <template #content>
                    Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted.
                </template>

                <template #footer>

                    <SecondaryButton @click="confirmingTeamDeletion = false">
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteTeam"
                    >
                        Delete Team
                    </DangerButton>

                </template>

            </ConfirmationModal>

        </template>

    </ActionSection>

</template>
`;
}
//# sourceMappingURL=generate-delete-team-form-vue.js.map