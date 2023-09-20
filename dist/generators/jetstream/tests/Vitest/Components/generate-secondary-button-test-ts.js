// ./src/generators/jetstream/tests/Vitest/Components/generate-secondary-button-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Components/SecondaryButton.test.ts

import { mount } from '@vue/test-utils'
import SecondaryButton from '../../../resources/js/Components/SecondaryButton.vue'


test('SecondaryButton.vue component imports successfully', async () => {

    expect(SecondaryButton).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-secondary-button-test-ts.js.map