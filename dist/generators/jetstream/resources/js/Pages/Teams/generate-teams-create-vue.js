// ./src/generators/jetstream/resources/js/Pages/Teams/generate-teams-create-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/Teams/Create.vue -->

<script setup lang="ts">

    import AppLayout from '../../Layouts/AppLayout.vue'
    import CreateTeamForm from './Partials/CreateTeamForm.vue'

</script>

<template>

    <AppLayout title="Create Team">

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Create Team
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateTeamForm />
            </div>
        </div>

    </AppLayout>

</template>
`;
}
//# sourceMappingURL=generate-teams-create-vue.js.map