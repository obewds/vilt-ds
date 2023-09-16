// ./src/generators/jetstream/tests/Vitest/Components/generate-checkbox-test-ts.ts
export default function () {
    return `// ./tests/Components/Checkbox.test.ts

import { mount } from '@vue/test-utils'
import Checkbox from '../../../resources/js/Components/Checkbox.vue'


test('Checkbox.vue component imports successfully', async () => {

    expect(Checkbox).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-checkbox-test-ts.js.map