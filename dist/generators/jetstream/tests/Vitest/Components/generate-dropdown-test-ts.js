// ./src/generators/jetstream/tests/Vitest/Components/generate-dropdown-test-ts.ts
export default function () {
    return `// ./tests/Components/Dropdown.test.ts

import { mount } from '@vue/test-utils'
import Dropdown from '../../../resources/js/Components/Dropdown.vue'


test('Dropdown.vue component imports successfully', async () => {

    expect(Dropdown).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-dropdown-test-ts.js.map