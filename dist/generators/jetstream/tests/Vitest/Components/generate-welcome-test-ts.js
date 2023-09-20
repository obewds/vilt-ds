// ./src/generators/jetstream/tests/Vitest/Components/generate-welcome-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Components/Welcome.test.ts

import { mount } from '@vue/test-utils'
import Welcome from '../../../resources/js/Components/Welcome.vue'


test('Welcome.vue component imports successfully', async () => {

    expect(Welcome).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-welcome-test-ts.js.map