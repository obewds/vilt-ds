// ./src/updaters/jetstream-profile-tests.ts

import installFile from '../helpers/install-file.js'

import generateDeleteUserFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-delete-user-form-test-ts.js'
import generateLogoutOtherBrowserSessionsFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-test-ts.js'
import generateTwoFactorAuthenticationFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-two-factor-authentication-form-test-ts.js'
import generateUpdatePasswordFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-update-password-form-test-ts.js'
import generateUpdateProfileInformationFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-update-profile-information-form-test-ts.js'
import generateProfileShowTestTs from '../generators/jetstream/tests/Vitest/Pages/Profile/generate-profile-show-test-ts.js'

export default function (): void {

    installFile( '/tests/Vitest/Pages/Profile/Partials/DeleteUserForm.test.ts', generateDeleteUserFormTestTs() )
    installFile( '/tests/Vitest/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.test.ts', generateLogoutOtherBrowserSessionsFormTestTs() )
    installFile( '/tests/Vitest/Pages/Profile/Partials/TwoFactorAuthenticationForm.test.ts', generateTwoFactorAuthenticationFormTestTs() )
    installFile( '/tests/Vitest/Pages/Profile/Partials/UpdatePasswordForm.test.ts', generateUpdatePasswordFormTestTs() )
    installFile( '/tests/Vitest/Pages/Profile/Partials/UpdateProfileInformationForm.test.ts', generateUpdateProfileInformationFormTestTs() )
    installFile( '/tests/Vitest/Pages/Profile/Show.test.ts', generateProfileShowTestTs() )

}
