// ./src/updaters/jetstream-auth-tests.ts
import installFile from '../helpers/install-file.js';
import generateConfirmPasswordTestTs from '../generators/jetstream/tests/Vitest/Pages/Auth/generate-confirm-password-test-ts.js';
import generateForgotPasswordTestTs from '../generators/jetstream/tests/Vitest/Pages/Auth/generate-forgot-password-test-ts.js';
import generateLoginTestTs from '../generators/jetstream/tests/Vitest/Pages/Auth/generate-login-test-ts.js';
import generateRegisterTestTs from '../generators/jetstream/tests/Vitest/Pages/Auth/generate-register-test-ts.js';
import generateResetPasswordTestTs from '../generators/jetstream/tests/Vitest/Pages/Auth/generate-reset-password-test-ts.js';
import generateTwoFactorChallengeTestTs from '../generators/jetstream/tests/Vitest/Pages/Auth/generate-two-factor-challenge-test-ts.js';
import generateVerifyEmailTestTs from '../generators/jetstream/tests/Vitest/Pages/Auth/generate-verify-email-test-ts.js';
export default function () {
    installFile('/tests/Vitest/Pages/Auth/ConfirmPassword.test.ts', generateConfirmPasswordTestTs());
    installFile('/tests/Vitest/Pages/Auth/ForgotPassword.test.ts', generateForgotPasswordTestTs());
    installFile('/tests/Vitest/Pages/Auth/Login.test.ts', generateLoginTestTs());
    installFile('/tests/Vitest/Pages/Auth/Register.test.ts', generateRegisterTestTs());
    installFile('/tests/Vitest/Pages/Auth/ResetPasswordT.test.ts', generateResetPasswordTestTs());
    installFile('/tests/Vitest/Pages/Auth/TwoFactorChallenge.test.ts', generateTwoFactorChallengeTestTs());
    installFile('/tests/Vitest/Pages/Auth/VerifyEmail.test.ts', generateVerifyEmailTestTs());
}
//# sourceMappingURL=jetstream-auth-tests.js.map