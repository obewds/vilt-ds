// ./src/generators/jetstream/tests/Vitest/Pages/Auth/generate-two-factor-challenge-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Pages/Auth/TwoFactorChallenge.test.ts

import { mount } from '@vue/test-utils'
import TwoFactorChallenge from '../../../../resources/js/Pages/Auth/TwoFactorChallenge.vue'

test('Auth/TwoFactorChallenge.vue component imports successfully', async () => {

    expect(TwoFactorChallenge).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-two-factor-challenge-test-ts.js.map