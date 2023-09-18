// ./src/generators/jetstream/tests/Vitest/Pages/Auth/generate-verify-email-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Auth/VerifyEmail.test.ts

import { mount } from '@vue/test-utils'
import VerifyEmail from '../../../../resources/js/Pages/Auth/VerifyEmail.vue'

test('Auth/VerifyEmail.vue component imports successfully', async () => {

    expect(VerifyEmail).toBeTruthy()

})
`;

}
