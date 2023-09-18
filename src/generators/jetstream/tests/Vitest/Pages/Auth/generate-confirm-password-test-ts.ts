// ./src/generators/jetstream/tests/Vitest/Pages/Auth/generate-confirm-password-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Auth/ConfirmPassword.test.ts

import { mount } from '@vue/test-utils'
import ConfirmPassword from '../../../../resources/js/Pages/Auth/ConfirmPassword.vue'

test('Auth/ConfirmPassword.vue component imports successfully', async () => {

    expect(ConfirmPassword).toBeTruthy()

})
`;

}
