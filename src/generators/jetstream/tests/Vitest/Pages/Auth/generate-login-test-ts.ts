// ./src/generators/jetstream/tests/Vitest/Pages/Auth/generate-login-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Auth/Login.test.ts

import { mount } from '@vue/test-utils'
import Login from '../../../../resources/js/Pages/Auth/Login.vue'

test('Auth/Login.vue component imports successfully', async () => {

    expect(Login).toBeTruthy()

})
`;

}
