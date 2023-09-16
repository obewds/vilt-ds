// ./src/generators/jetstream/tests/Vitest/Pages/generate-privacy-policy-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/PrivacyPolicy.test.ts

import { mount } from '@vue/test-utils'
import PrivacyPolicy from '../../../resources/js/Pages/PrivacyPolicy.vue'

test('PrivacyPolicy.vue component imports successfully', async () => {

    expect(PrivacyPolicy).toBeTruthy()

})
`;

}
