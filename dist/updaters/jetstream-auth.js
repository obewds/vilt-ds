// ./src/updaters/jetstream-auth.ts
import installFile from '../helpers/install-file.js';
import generateConfirmPasswordVue from '../generators/jetstream/resources/js/Pages/Auth/generate-confirm-password-vue.js';
import generateForgotPasswordVue from '../generators/jetstream/resources/js/Pages/Auth/generate-forgot-password-vue.js';
import generateLoginVue from '../generators/jetstream/resources/js/Pages/Auth/generate-login-vue.js';
import generateRegisterVue from '../generators/jetstream/resources/js/Pages/Auth/generate-register-vue.js';
import generateResetPasswordVue from '../generators/jetstream/resources/js/Pages/Auth/generate-reset-password-vue.js';
import generateTwoFactorChallengeVue from '../generators/jetstream/resources/js/Pages/Auth/generate-two-factor-challenge-vue.js';
import generateVerifyEmailVue from '../generators/jetstream/resources/js/Pages/Auth/generate-verify-email-vue.js';
export default function () {
    installFile('/resources/js/Pages/Auth/ConfirmPassword.vue', generateConfirmPasswordVue());
    installFile('/resources/js/Pages/Auth/ForgotPassword.vue', generateForgotPasswordVue());
    installFile('/resources/js/Pages/Auth/Login.vue', generateLoginVue());
    installFile('/resources/js/Pages/Auth/Register.vue', generateRegisterVue());
    installFile('/resources/js/Pages/Auth/ResetPassword.vue', generateResetPasswordVue());
    installFile('/resources/js/Pages/Auth/TwoFactorChallenge.vue', generateTwoFactorChallengeVue());
    installFile('/resources/js/Pages/Auth/VerifyEmail.vue', generateVerifyEmailVue());
}
//# sourceMappingURL=jetstream-auth.js.map