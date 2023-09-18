// ./src/generators/jetstream/tests/Vitest/Pages/Auth/generate-register-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Pages/Auth/Register.test.ts

import { mount } from '@vue/test-utils'
import Register from '../../../../resources/js/Pages/Auth/Register.vue'

test('Auth/Register.vue component imports successfully', async () => {

    expect(Register).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-register-test-ts.js.map