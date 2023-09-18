// ./src/generators/jetstream/tests/Vitest/Pages/Auth/generate-forgot-password-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Pages/Auth/ForgotPassword.test.ts

import { mount } from '@vue/test-utils'
import ForgotPassword from '../../../../resources/js/Pages/Auth/ForgotPassword.vue'

test('Auth/ForgotPassword.vue component imports successfully', async () => {

    expect(ForgotPassword).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-forgot-password-test-ts.js.map