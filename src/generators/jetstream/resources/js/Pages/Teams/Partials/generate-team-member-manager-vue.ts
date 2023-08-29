// ./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-team-member-manager-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/Teams/Partials/TeamMemberManager.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { JetstreamTeamRoleData, JetstreamTeamData, JetstreamTeamMember, JetstreamTeamMembership, JetstreamTeamPermissionsData, JetstreamTeamInvitation, UsePageSharedDataProps } from '../../../Types/app-jetstream-types'

    import { computed, defineComponent, ref } from 'vue'
    import { router, useForm, usePage } from '@inertiajs/vue3'

    import ActionMessage from '../../../Components/ActionMessage.vue'
    import ActionSection from '../../../Components/ActionSection.vue'
    import ConfirmationModal from '../../../Components/ConfirmationModal.vue'
    import DangerButton from '../../../Components/DangerButton.vue'
    import DialogModal from '../../../Components/DialogModal.vue'
    import FormSection from '../../../Components/FormSection.vue'
    import InputError from '../../../Components/InputError.vue'
    import InputLabel from '../../../Components/InputLabel.vue'
    import PrimaryButton from '../../../Components/PrimaryButton.vue'
    import SecondaryButton from '../../../Components/SecondaryButton.vue'
    import SectionBorder from '../../../Components/SectionBorder.vue'
    import VvFormGroup from '../../../Components/vv/forms/VvFormGroup.vue'
    import VvInput from '../../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            ActionMessage,
            ActionSection,
            ConfirmationModal,
            DangerButton,
            DialogModal,
            FormSection,
            InputError,
            InputLabel,
            PrimaryButton,
            SecondaryButton,
            SectionBorder,
            VvFormGroup,
            VvInput,
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
            userPermissions: {
                type: Object as PropType<JetstreamTeamPermissionsData>,
                default: {},
            },
        },

        setup (props) {

            const pageProps = computed( () => usePage().props as UsePageSharedDataProps )

            const addTeamMemberForm = useForm({
                email: '',
                role: null as null|string,
            })

            const updateRoleForm = useForm({
                role: null as null|string,
            })

            const leaveTeamForm = useForm({})
            const removeTeamMemberForm = useForm({})

            const currentlyManagingRole = ref(false)
            const managingRoleFor = ref<null|JetstreamTeamMember>(null)
            const confirmingLeavingTeam = ref(false)
            const teamMemberBeingRemoved = ref<null|JetstreamTeamMember>(null)

            const addTeamMember = () => {
                addTeamMemberForm.post( route('team-members.store', props.team), {
                    errorBag: 'addTeamMember',
                    preserveScroll: true,
                    onSuccess: () => addTeamMemberForm.reset(),
                })
            }

            const cancelTeamInvitation = (invitation:JetstreamTeamInvitation) => {
                router.delete( route('team-invitations.destroy', invitation), {
                    preserveScroll: true,
                })
            }

            const manageRole = (teamMember:JetstreamTeamMember) => {
                managingRoleFor.value = teamMember
                updateRoleForm.role = teamMember.membership.role
                currentlyManagingRole.value = true
            }

            const updateRole = () => {
                updateRoleForm.put( route('team-members.update', [props.team, managingRoleFor.value]), {
                    preserveScroll: true,
                    onSuccess: () => currentlyManagingRole.value = false,
                })
            }

            const confirmLeavingTeam = () => {
                confirmingLeavingTeam.value = true
            }

            const leaveTeam = () => {
                leaveTeamForm.delete(route('team-members.destroy', [props.team, pageProps.value.auth.user]))
            }

            const confirmTeamMemberRemoval = (teamMember:JetstreamTeamMember) => {
                teamMemberBeingRemoved.value = teamMember
            }

            const removeTeamMember = () => {
                removeTeamMemberForm.delete( route('team-members.destroy', [props.team, teamMemberBeingRemoved.value]), {
                    errorBag: 'removeTeamMember',
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => teamMemberBeingRemoved.value = null,
                })
            }

            const displayableRole = (membership:JetstreamTeamMembership): string|null => {
                if (props.availableRoles) {
                    return String(props.availableRoles.find(r => r.key === membership.role)?.name)
                }
                return null
            }

            return {
                addTeamMember,
                addTeamMemberForm,
                cancelTeamInvitation,
                confirmingLeavingTeam,
                confirmLeavingTeam,
                confirmTeamMemberRemoval,
                currentlyManagingRole,
                displayableRole,
                leaveTeam,
                leaveTeamForm,
                manageRole,
                managingRoleFor,
                pageProps,
                removeTeamMember,
                removeTeamMemberForm,
                teamMemberBeingRemoved,
                updateRole,
                updateRoleForm,
            }

        },

    })

</script>

<template>

    <div>

        <div v-if="userPermissions.canAddTeamMembers">

            <SectionBorder />

            <!-- Add Team Member -->
            <FormSection @submitted="addTeamMember">

                <template #title>
                    Add Team Member
                </template>

                <template #description>
                    Add a new team member to your team, allowing them to collaborate with you.
                </template>

                <template #form>

                    <div class="col-span-6">
                        <div class="max-w-xl text-sm text-gray-600 dark:text-gray-400">
                            Please provide the email address of the person you would like to add to this team.
                        </div>
                    </div>

                    <!-- Member Email -->
                    <div class="col-span-6 sm:col-span-4">

                        <VvFormGroup
                            label="Email:"
                            label-for="email"
                            :display-error="addTeamMemberForm.errors.email !== ''"
                            :error-text="addTeamMemberForm.errors.email"
                        >
                            <VvInput
                                id="email"
                                v-model="addTeamMemberForm.email"
                                type="email"
                                placeholder="Enter Teammate Email"
                                class="rounded-lg"
                            />
                        </VvFormGroup>

                    </div>

                    <!-- Role -->
                    <div v-if="availableRoles.length > 0" class="col-span-6 lg:col-span-4">
                        <InputLabel for="roles" value="Role" />
                        <InputError :message="addTeamMemberForm.errors.role" class="mt-2" />

                        <div class="relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer">
                            <button
                                v-for="(role, i) in availableRoles"
                                :key="role.key"
                                type="button"
                                class="relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                                :class="{'border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none': i > 0, 'rounded-b-none': i != Object.keys(availableRoles).length - 1}"
                                @click="addTeamMemberForm.role = role.key"
                            >
                                <div :class="{'opacity-50': addTeamMemberForm.role && addTeamMemberForm.role != role.key}">
                                    <!-- Role Name -->
                                    <div class="flex items-center">
                                        <div class="text-sm text-gray-600 dark:text-gray-400" :class="{'font-semibold': addTeamMemberForm.role == role.key}">
                                            {{ role.name }}
                                        </div>

                                        <svg v-if="addTeamMemberForm.role == role.key" class="ml-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <!-- Role Description -->
                                    <div class="mt-2 text-xs text-gray-600 dark:text-gray-400 text-left">
                                        {{ role.description }}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </template>

                <template #actions>

                    <ActionMessage :on="addTeamMemberForm.recentlySuccessful" class="mr-3">
                        Added.
                    </ActionMessage>

                    <PrimaryButton :class="{ 'opacity-25': addTeamMemberForm.processing }" :disabled="addTeamMemberForm.processing">
                        Add
                    </PrimaryButton>

                </template>

            </FormSection>

        </div>

        <div v-if="team.team_invitations.length > 0 && userPermissions.canAddTeamMembers">

            <SectionBorder />

            <!-- Team Member Invitations -->
            <ActionSection class="mt-10 sm:mt-0">

                <template #title>
                    Pending Team Invitations
                </template>

                <template #description>
                    These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation.
                </template>

                <!-- Pending Team Member Invitation List -->
                <template #content>
                    <div class="space-y-6">
                        <div v-for="invitation in team.team_invitations" :key="invitation.id" class="flex items-center justify-between">
                            <div class="text-gray-600 dark:text-gray-400">
                                {{ invitation.email }}
                            </div>

                            <div class="flex items-center">
                                <!-- Cancel Team Invitation -->
                                <button
                                    v-if="userPermissions.canRemoveTeamMembers"
                                    class="cursor-pointer ml-6 text-sm text-red-500 focus:outline-none"
                                    @click="cancelTeamInvitation(invitation)"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </template>

            </ActionSection>

        </div>

        <div v-if="team.users.length > 0">

            <SectionBorder />

            <!-- Manage Team Members -->
            <ActionSection class="mt-10 sm:mt-0">

                <template #title>
                    Team Members
                </template>

                <template #description>
                    All of the people that are part of this team.
                </template>

                <!-- Team Member List -->
                <template #content>

                    <div class="space-y-6">

                        <div v-for="user in team.users" :key="user.id" class="flex items-center justify-between">

                            <div class="flex items-center">
                                <img class="w-8 h-8 rounded-full object-cover" :src="user.profile_photo_url" :alt="user.name">
                                <div class="ml-4 dark:text-white">
                                    {{ user.name }}
                                </div>
                            </div>

                            <div class="flex items-center">

                                <!-- Manage Team Member Role -->
                                <button
                                    v-if="userPermissions.canUpdateTeamMembers && availableRoles.length"
                                    class="ml-2 text-sm text-gray-400 underline"
                                    @click="manageRole(user)"
                                >
                                    {{ displayableRole(user.membership) }}
                                </button>

                                <div v-else-if="availableRoles.length" class="ml-2 text-sm text-gray-400">
                                    {{ displayableRole(user.membership) }}
                                </div>

                                <!-- Leave Team -->
                                <button
                                    v-if="pageProps.auth.user.id === user.id"
                                    class="cursor-pointer ml-6 text-sm text-red-500"
                                    @click="confirmLeavingTeam"
                                >
                                    Leave
                                </button>

                                <!-- Remove Team Member -->
                                <button
                                    v-else-if="userPermissions.canRemoveTeamMembers"
                                    class="cursor-pointer ml-6 text-sm text-red-500"
                                    @click="confirmTeamMemberRemoval(user)"
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    </div>

                </template>

            </ActionSection>

        </div>

        <!-- Role Management Modal -->
        <DialogModal :show="currentlyManagingRole" @close="currentlyManagingRole = false">

            <template #title>
                Manage Role
            </template>

            <template #content>

                <div v-if="managingRoleFor">

                    <div class="relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer">

                        <button
                            v-for="(role, i) in availableRoles"
                            :key="role.key"
                            type="button"
                            class="relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                            :class="{'border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none': i > 0, 'rounded-b-none': i !== Object.keys(availableRoles).length - 1}"
                            @click="updateRoleForm.role = role.key"
                        >
                            <div :class="{'opacity-50': updateRoleForm.role && updateRoleForm.role !== role.key}">
                                <!-- Role Name -->
                                <div class="flex items-center">
                                    <div class="text-sm text-gray-600 dark:text-gray-400" :class="{'font-semibold': updateRoleForm.role === role.key}">
                                        {{ role.name }}
                                    </div>

                                    <svg v-if="updateRoleForm.role == role.key" class="ml-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <!-- Role Description -->
                                <div class="mt-2 text-xs text-gray-600 dark:text-gray-400">
                                    {{ role.description }}
                                </div>
                            </div>
                        </button>

                    </div>

                </div>

            </template>

            <template #footer>

                <SecondaryButton @click="currentlyManagingRole = false">
                    Cancel
                </SecondaryButton>

                <PrimaryButton
                    class="ml-3"
                    :class="{ 'opacity-25': updateRoleForm.processing }"
                    :disabled="updateRoleForm.processing"
                    @click="updateRole"
                >
                    Save
                </PrimaryButton>

            </template>

        </DialogModal>

        <!-- Leave Team Confirmation Modal -->
        <ConfirmationModal :show="confirmingLeavingTeam" @close="confirmingLeavingTeam = false">

            <template #title>
                Leave Team
            </template>

            <template #content>
                Are you sure you would like to leave this team?
            </template>

            <template #footer>

                <SecondaryButton @click="confirmingLeavingTeam = false">
                    Cancel
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    :class="{ 'opacity-25': leaveTeamForm.processing }"
                    :disabled="leaveTeamForm.processing"
                    @click="leaveTeam"
                >
                    Leave
                </DangerButton>

            </template>

        </ConfirmationModal>

        <!-- Remove Team Member Confirmation Modal -->
        <ConfirmationModal :show="teamMemberBeingRemoved !== null ? true : false" @close="teamMemberBeingRemoved = null">

            <template #title>
                Remove Team Member
            </template>

            <template #content>
                Are you sure you would like to remove this person from the team?
            </template>

            <template #footer>

                <SecondaryButton @click="teamMemberBeingRemoved = null">
                    Cancel
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    :class="{ 'opacity-25': removeTeamMemberForm.processing }"
                    :disabled="removeTeamMemberForm.processing"
                    @click="removeTeamMember"
                >
                    Remove
                </DangerButton>

            </template>

        </ConfirmationModal>

    </div>

</template>
`;

}
