// ./src/generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-create-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Pages/Teams/Create.test.ts

import { mount } from '@vue/test-utils'
import Create from '../../../../resources/js/Pages/Teams/Create.vue'

test('Teams/Create.vue component imports successfully', async () => {

    expect(Create).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-teams-create-test-ts.js.map