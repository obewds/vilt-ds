// ./src/generators/jetstream/resources/js/Pages/API/Partials/generate-api-token-manager-vue.ts

export default function (): string {

return `<!-- ./resources/js/Pages/API/Partials/ApiTokenManager.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { JetstreamApiPermission, JetstreamApiTokenData, UsePageSharedDataProps } from '../../../Types/app-jetstream-types'

    import { computed, defineComponent, ref } from 'vue'
    import { useForm, usePage } from '@inertiajs/vue3'
    import { route } from '../../../../../vendor/tightenco/ziggy'

    import ActionMessage from '../../../Components/ActionMessage.vue'
    import ActionSection from '../../../Components/ActionSection.vue'
    import Checkbox from '../../../Components/Checkbox.vue'
    import ConfirmationModal from '../../../Components/ConfirmationModal.vue'
    import DangerButton from '../../../Components/DangerButton.vue'
    import DialogModal from '../../../Components/DialogModal.vue'
    import FormSection from '../../../Components/FormSection.vue'
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
            Checkbox,
            ConfirmationModal,
            DangerButton,
            DialogModal,
            FormSection,
            InputLabel,
            PrimaryButton,
            SecondaryButton,
            SectionBorder,
            VvFormGroup,
            VvInput,
        },

        props: {
            tokens: {
                type: Array as PropType<Array<JetstreamApiTokenData>>,
                default: [],
            },
            availablePermissions: {
                type: Array as PropType<Array<JetstreamApiPermission>>,
                default: [],
            },
            defaultPermissions: {
                type: Array as PropType<Array<JetstreamApiPermission>>,
                default: [],
            },
        },

        setup (props) {

            const pageProps = computed( () => usePage().props as UsePageSharedDataProps)

            const createApiTokenForm = useForm({
                name: '',
                permissions: props.defaultPermissions,
            })

            const updateApiTokenForm = useForm({
                permissions: [] as Array<JetstreamApiPermission>,
            })

            const deleteApiTokenForm = useForm({})

            const displayingToken = ref(false)
            const managingPermissionsFor = ref<null|JetstreamApiTokenData>(null)
            const apiTokenBeingDeleted = ref<null|JetstreamApiTokenData>(null)

            const createApiToken = () => {
                createApiTokenForm.post(route('api-tokens.store'), {
                    preserveScroll: true,
                    onSuccess: () => {
                        displayingToken.value = true
                        createApiTokenForm.reset()
                    },
                })
            }

            const manageApiTokenPermissions = (token: JetstreamApiTokenData) => {
                updateApiTokenForm.permissions = token.abilities
                managingPermissionsFor.value = token;
            }

            const updateApiToken = () => {
                updateApiTokenForm.put(route('api-tokens.update', managingPermissionsFor.value as any), {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => (managingPermissionsFor.value = null),
                });
            }

            const confirmApiTokenDeletion = (token: JetstreamApiTokenData) => {
                apiTokenBeingDeleted.value = token;
            }

            const deleteApiToken = () => {
                deleteApiTokenForm.delete(route('api-tokens.destroy', apiTokenBeingDeleted.value as any), {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => (apiTokenBeingDeleted.value = null),
                });
            }

            return {
                apiTokenBeingDeleted,
                confirmApiTokenDeletion,
                createApiToken,
                createApiTokenForm,
                deleteApiToken,
                deleteApiTokenForm,
                displayingToken,
                manageApiTokenPermissions,
                managingPermissionsFor,
                pageProps,
                updateApiToken,
                updateApiTokenForm,
                usePage,
            }

        },

    })

</script>

<template>

    <div>

        <!-- Generate API Token -->
        <FormSection @submitted="createApiToken">

            <template #title>
                Create API Token
            </template>

            <template #description>
                API tokens allow third-party services to authenticate with our application on your behalf.
            </template>

            <template #form>

                <!-- Token Name -->
                <div class="col-span-6 sm:col-span-4">

                    <VvFormGroup
                        label="Name:"
                        label-for="name"
                        :display-error="createApiTokenForm.errors.name !== ''"
                        :error-text="createApiTokenForm.errors.name"
                    >
                        <VvInput
                            id="name"
                            v-model="createApiTokenForm.name"
                            placeholder="Enter Token Name"
                            class="rounded-lg"
                            autofocus="true"
                        />
                    </VvFormGroup>

                </div>

                <!-- Token Permissions -->
                <div v-if="availablePermissions.length > 0" class="col-span-6">

                    <InputLabel for="permissions" value="Permissions" />

                    <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div v-for="permission in availablePermissions" :key="permission">

                            <label class="flex items-center">
                                <Checkbox v-model:checked="createApiTokenForm.permissions" :value="permission" />
                                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ permission }}</span>
                            </label>

                        </div>

                    </div>

                </div>

            </template>

            <template #actions>

                <ActionMessage
                    :on="createApiTokenForm.recentlySuccessful"
                    class="mr-3"
                >
                    Created.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': createApiTokenForm.processing }" :disabled="createApiTokenForm.processing">
                    Create
                </PrimaryButton>

            </template>

        </FormSection>

        <div v-if="tokens.length > 0">

            <SectionBorder />

            <!-- Manage API Tokens -->
            <div class="mt-10 sm:mt-0">

                <ActionSection>

                    <template #title>
                        Manage API Tokens
                    </template>

                    <template #description>
                        You may delete any of your existing tokens if they are no longer needed.
                    </template>

                    <!-- API Token List -->
                    <template #content>

                        <div class="space-y-6">

                            <div v-for="token in tokens" :key="token.id" class="flex items-center justify-between">

                                <div class="break-all dark:text-white">
                                    {{ token.name }}
                                </div>

                                <div class="flex items-center ml-2">

                                    <div v-if="token.last_used_ago" class="text-sm text-gray-400">
                                        Last used {{ token.last_used_ago }}
                                    </div>

                                    <button
                                        v-if="availablePermissions.length > 0"
                                        class="cursor-pointer ml-6 text-sm text-gray-400 underline"
                                        @click="manageApiTokenPermissions(token)"
                                    >
                                        Permissions
                                    </button>

                                    <button class="cursor-pointer ml-6 text-sm text-red-500" @click="confirmApiTokenDeletion(token)">
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    </template>

                </ActionSection>

            </div>

        </div>

        <!-- Token Value Modal -->
        <DialogModal :show="displayingToken" @close="displayingToken = false">

            <template #title>
                API Token
            </template>

            <template #content>

                <div>
                    Please copy your new API token. For your security, it won't be shown again.
                </div>

                <div v-if="(pageProps.jetstream.flash.token)" class="mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all">
                    {{ pageProps.jetstream.flash?.token }}
                </div>

            </template>

            <template #footer>

                <SecondaryButton @click="displayingToken = false">
                    Close
                </SecondaryButton>

            </template>

        </DialogModal>

        <!-- API Token Permissions Modal -->
        <DialogModal :show="managingPermissionsFor != null" @close="managingPermissionsFor = null">

            <template #title>
                API Token Permissions
            </template>

            <template #content>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div v-for="permission in availablePermissions" :key="permission">

                        <label class="flex items-center">
                            <Checkbox v-model:checked="updateApiTokenForm.permissions" :value="permission" />
                            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ permission }}</span>
                        </label>

                    </div>

                </div>

            </template>

            <template #footer>

                <SecondaryButton @click="managingPermissionsFor = null">
                    Cancel
                </SecondaryButton>

                <PrimaryButton
                    class="ml-3"
                    :class="{ 'opacity-25': updateApiTokenForm.processing }"
                    :disabled="updateApiTokenForm.processing"
                    @click="updateApiToken"
                >
                    Save
                </PrimaryButton>

            </template>

        </DialogModal>

        <!-- Delete Token Confirmation Modal -->
        <ConfirmationModal :show="apiTokenBeingDeleted != null" @close="apiTokenBeingDeleted = null">

            <template #title>
                Delete API Token
            </template>

            <template #content>
                Are you sure you would like to delete this API token?
            </template>

            <template #footer>

                <SecondaryButton @click="apiTokenBeingDeleted = null">
                    Cancel
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    :class="{ 'opacity-25': deleteApiTokenForm.processing }"
                    :disabled="deleteApiTokenForm.processing"
                    @click="deleteApiToken"
                >
                    Delete
                </DangerButton>

            </template>

        </ConfirmationModal>

    </div>

</template>
`;

}
