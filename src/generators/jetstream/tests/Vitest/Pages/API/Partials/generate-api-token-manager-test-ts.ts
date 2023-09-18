// ./src/generators/jetstream/tests/Vitest/Pages/API/Partials/generate-api-token-manager-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/API/Partials/ApiTokenManager.test.ts

import { mount } from '@vue/test-utils'
import ApiTokenManager from '../../../../../resources/js/Pages/API/Partials/ApiTokenManager.vue'

test('ApiTokenManager.vue component imports successfully', async () => {

    expect(ApiTokenManager).toBeTruthy()

})
`;

}
