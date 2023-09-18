// ./src/generators/jetstream/tests/Vitest/Pages/API/generate-api-index-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/API/Index.test.ts

import { mount } from '@vue/test-utils'
import Index from '../../../../resources/js/Pages/API/Index.vue'

test('API/Index.vue component imports successfully', async () => {

    expect(Index).toBeTruthy()

})
`;

}
