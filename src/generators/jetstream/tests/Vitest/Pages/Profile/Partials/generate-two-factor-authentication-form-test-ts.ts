// ./src/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-two-factor-authentication-form-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Profile/TwoFactorAuthenticationForm.test.ts

import { mount } from '@vue/test-utils'
import TwoFactorAuthenticationForm from '../../../../../resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue'

test('Profile/TwoFactorAuthenticationForm.vue component imports successfully', async () => {

    expect(TwoFactorAuthenticationForm).toBeTruthy()

})
`;

}
