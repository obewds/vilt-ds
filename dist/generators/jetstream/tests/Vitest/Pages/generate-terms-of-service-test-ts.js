// ./src/generators/jetstream/tests/Vitest/Pages/generate-terms-of-service-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Pages/TermsOfService.test.ts

import { mount } from '@vue/test-utils'
import TermsOfService from '../../../resources/js/Pages/TermsOfService.vue'

test('TermsOfService.vue component imports successfully', async () => {

    expect(TermsOfService).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-terms-of-service-test-ts.js.map