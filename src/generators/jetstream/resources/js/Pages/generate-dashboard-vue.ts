// ./src/generators/jetstream/resources/js/Pages/generate-dashboard-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Dashboard.vue -->

<script setup lang="ts">

    import AppLayout from '../Layouts/AppLayout.vue'
    import Welcome from '../Components/Welcome.vue'

</script>

<template>

    <AppLayout
        title="Dashboard"
    >

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <Welcome />
                </div>
            </div>
        </div>

    </AppLayout>

</template>
`;

}
