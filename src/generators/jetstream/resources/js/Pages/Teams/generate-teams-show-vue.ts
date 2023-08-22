// ./src/generators/jetstream/resources/js/Pages/Teams/generate-teams-show-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Teams/Show.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { JetstreamTeamData, JetstreamTeamPermissionsData, JetstreamTeamRoleData } from '../../Types/app-jetstream-types'

    import { defineComponent } from 'vue'

    import AppLayout from '../../Layouts/AppLayout.vue'
    import DeleteTeamForm from './Partials/DeleteTeamForm.vue'
    import SectionBorder from '../../Components/SectionBorder.vue'
    import TeamMemberManager from './Partials/TeamMemberManager.vue'
    import UpdateTeamNameForm from './Partials/UpdateTeamNameForm.vue'

    export default defineComponent({

        components: {
            AppLayout,
            DeleteTeamForm,
            SectionBorder,
            TeamMemberManager,
            UpdateTeamNameForm,
        },

        props: {
            team: {
                type: Object as PropType<JetstreamTeamData>,
                default: {},
            },
            availableRoles: {
                type: Array as PropType<Array<JetstreamTeamRoleData>>,
                default: [],
            },
            permissions: {
                type: Object as PropType<JetstreamTeamPermissionsData>,
                default: {},
            },
        },

    })

</script>

<template>

    <AppLayout title="Team Settings">

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Team Settings
            </h2>
        </template>

        <div>

            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                <UpdateTeamNameForm :team="team" :permissions="permissions" />

                <TeamMemberManager
                    class="mt-10 sm:mt-0"
                    :team="team"
                    :available-roles="availableRoles"
                    :user-permissions="permissions"
                />

                <template v-if="permissions.canDeleteTeam && ! team.personal_team">

                    <SectionBorder />

                    <DeleteTeamForm class="mt-10 sm:mt-0" :team="team" />

                </template>

            </div>

        </div>

    </AppLayout>

</template>
`;

}
