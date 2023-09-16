// ./src/generators/jetstream/tests/Vitest/Pages/generate-dashboard-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Pages/Dashboard.test.ts

import { mount } from '@vue/test-utils'
import Dashboard from '../../../resources/js/Pages/Dashboard.vue'

test('Dashboard.vue component imports successfully', async () => {

    expect(Dashboard).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-dashboard-test-ts.js.map