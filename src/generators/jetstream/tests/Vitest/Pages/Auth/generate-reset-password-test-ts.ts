// ./src/generators/jetstream/tests/Vitest/Pages/Auth/generate-reset-password-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Auth/ResetPassword.test.ts

import { mount } from '@vue/test-utils'
import ResetPassword from '../../../../resources/js/Pages/Auth/ResetPassword.vue'

test('Auth/ResetPassword.vue component imports successfully', async () => {

    expect(ResetPassword).toBeTruthy()

})
`;

}
