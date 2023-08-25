// ./src/updaters/jetstream-profile.ts
import installFile from '../helpers/install-file.js';
import generateDeleteUserFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-delete-user-form-vue.js';
import generateLogoutOtherBrowserSessionsFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-vue.js';
import generateTwoFactorAuthenticationFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-two-factor-authentication-form-vue.js';
import generateUpdatePasswordFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-password-form-vue.js';
import generateUpdateProfileInformationFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-profile-information-form-vue.js';
import generateProfileShowVue from '../generators/jetstream/resources/js/Pages/Profile/generate-profile-show-vue.js';
export default function () {
    installFile('/resources/js/Pages/Profile/Partials/DeleteUserForm.vue', generateDeleteUserFormVue());
    installFile('/resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue', generateLogoutOtherBrowserSessionsFormVue());
    installFile('/resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue', generateTwoFactorAuthenticationFormVue());
    installFile('/resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue', generateUpdatePasswordFormVue());
    installFile('/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue', generateUpdateProfileInformationFormVue());
    installFile('/resources/js/Pages/Profile/Show.vue', generateProfileShowVue());
}
//# sourceMappingURL=jetstream-profile.js.map