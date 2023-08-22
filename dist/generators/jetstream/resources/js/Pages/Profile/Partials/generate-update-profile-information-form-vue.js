// ./src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-profile-information-form-vue.ts
// TODO: fix the "type: Object as PropType<any>," any type
// TODO: fix the "const photoPreview = ref<any>(null)" any type
export default function () {
    return `<!-- ./resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { UsePageSharedDataProps } from '../../../Types/app-jetstream-types'

    import { computed, defineComponent, ref } from 'vue'
    import route from 'ziggy-js'
    import { Link, router, useForm, usePage } from '@inertiajs/vue3'

    import ActionMessage from '../../../Components/ActionMessage.vue'
    import FormSection from '../../../Components/FormSection.vue'
    import InputError from '../../../Components/InputError.vue'
    import InputLabel from '../../../Components/InputLabel.vue'
    import PrimaryButton from '../../../Components/PrimaryButton.vue'
    import SecondaryButton from '../../../Components/SecondaryButton.vue'
    import VvFormGroup from '../../../Components/vv/forms/VvFormGroup.vue'
    import VvInput from '../../../Components/vv/inputs/VvInput.vue'

    export default defineComponent({

        components: {
            ActionMessage,
            FormSection,
            InputError,
            InputLabel,
            Link,
            PrimaryButton,
            SecondaryButton,
            VvFormGroup,
            VvInput,
        },

        props: {
            user: {
                type: Object as PropType<any>,
                default: {},
            },
        },

        setup (props) {

            const pageProps = computed( () => usePage().props as UsePageSharedDataProps )

            const form = useForm({
                _method: 'PUT',
                name: props.user.name,
                email: props.user.email,
                photo: null as null|File,
            })

            const verificationLinkSent = ref<boolean>(false)
            const photoPreview = ref<any>(null)
            const photoInput = ref<null|HTMLInputElement>(null)

            const updateProfileInformation = () => {

                if (photoInput.value && photoInput.value.files) {
                    form.photo = photoInput.value.files[0]
                }

                form.post(route('user-profile-information.update'), {
                    errorBag: 'updateProfileInformation',
                    preserveScroll: true,
                    onSuccess: () => clearPhotoFileInput(),
                })

            }

            const sendEmailVerification = () => {
                verificationLinkSent.value = true
            }

            const selectNewPhoto = () => {
                photoInput.value?.click()
            }

            const updatePhotoPreview = () => {

                const photo = photoInput.value && photoInput.value.files ? photoInput.value.files[0] : null

                if (! photo) return

                const reader = new FileReader()

                reader.onload = (e: Event) => {
                    let target = e.target as FileReader
                    photoPreview.value = target.result
                };

                reader.readAsDataURL(photo)

            }

            const deletePhoto = () => {
                router.delete(route('current-user-photo.destroy'), {
                    preserveScroll: true,
                    onSuccess: () => {
                        photoPreview.value = null
                        clearPhotoFileInput()
                    },
                })
            }

            const clearPhotoFileInput = () => {
                if (photoInput.value?.value) {
                    photoInput.value.value = ''
                }
            }

            return {
                clearPhotoFileInput,
                deletePhoto,
                form,
                pageProps,
                photoPreview,
                route,
                selectNewPhoto,
                sendEmailVerification,
                updatePhotoPreview,
                updateProfileInformation,
                verificationLinkSent,
            }

        },

    })

</script>

<template>

    <FormSection @submitted="updateProfileInformation">

        <template #title>
            Profile Information
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #form>

            <!-- Profile Photo -->
            <div v-if="pageProps.jetstream.managesProfilePhotos" class="col-span-6 sm:col-span-4">

                <!-- Profile Photo File Input -->
                <input
                    ref="photoInput"
                    type="file"
                    class="hidden"
                    @change="updatePhotoPreview"
                >

                <InputLabel for="photo" value="Photo" />

                <!-- Current Profile Photo -->
                <div v-show="! photoPreview" class="mt-2">
                    <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full h-20 w-20 object-cover">
                </div>

                <!-- New Profile Photo Preview -->
                <div v-show="photoPreview" class="mt-2">
                    <span
                        class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                        :style="'background-image: url(' + photoPreview + ');'"
                    />
                </div>

                <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                    Select A New Photo
                </SecondaryButton>

                <SecondaryButton
                    v-if="user.profile_photo_path"
                    type="button"
                    class="mt-2"
                    @click.prevent="deletePhoto"
                >
                    Remove Photo
                </SecondaryButton>

                <InputError :message="form.errors.photo" class="mt-2" />

            </div>

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">

                <VvFormGroup
                    label="Name:"
                    label-for="name"
                    :display-error="form.errors.name !== ''"
                    :error-text="form.errors.name"
                >
                    <VvInput
                        id="name"
                        v-model="form.name"
                        placeholder="Enter Your Name"
                        required
                        autocomplete="name"
                        class="rounded-lg"
                    />
                </VvFormGroup>

            </div>

            <!-- Email -->
            <div class="col-span-6 sm:col-span-4">

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
                        placeholder="Enter Your Email"
                        required
                        autocomplete="username"
                        class="rounded-lg"
                    />
                </VvFormGroup>

                <div v-if="pageProps.jetstream.hasEmailVerification && user.email_verified_at === null">

                    <p class="text-sm mt-2 dark:text-white">
                        Your email address is unverified.
                        <Link
                            :href="route('verification.send')"
                            method="post"
                            as="button"
                            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            @click.prevent="sendEmailVerification"
                        >
                            Click here to re-send the verification email.
                        </Link>
                    </p>

                    <div v-show="verificationLinkSent" class="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                        A new verification link has been sent to your email address.
                    </div>

                </div>

            </div>

        </template>

        <template #actions>

            <ActionMessage
                :on="form.recentlySuccessful"
                class="mr-3"
            >
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
//# sourceMappingURL=generate-update-profile-information-form-vue.js.map