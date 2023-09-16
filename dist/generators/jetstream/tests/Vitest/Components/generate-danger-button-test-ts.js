// ./src/generators/jetstream/tests/Vitest/Components/generate-danger-button-test-ts.ts
export default function () {
    return `// ./tests/Components/DangerButton.test.ts

import { mount } from '@vue/test-utils'
import DangerButton from '../../../resources/js/Components/DangerButton.vue'


test('DangerButton.vue component imports successfully', async () => {

    expect(DangerButton).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-danger-button-test-ts.js.map