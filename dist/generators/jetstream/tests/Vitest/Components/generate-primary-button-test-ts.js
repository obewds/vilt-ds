// ./src/generators/jetstream/tests/Vitest/Components/generate-primary-button-test-ts.ts
export default function () {
    return `// ./tests/Components/PrimaryButton.test.ts

import { mount } from '@vue/test-utils'
import PrimaryButton from '../../../resources/js/Components/PrimaryButton.vue'


test('PrimaryButton.vue component imports successfully', async () => {

    expect(PrimaryButton).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-primary-button-test-ts.js.map