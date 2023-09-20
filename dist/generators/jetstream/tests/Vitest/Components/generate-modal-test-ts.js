// ./src/generators/jetstream/tests/Vitest/Components/generate-modal-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Components/Modal.test.ts

import { mount } from '@vue/test-utils'
import Modal from '../../../resources/js/Components/Modal.vue'


test('Modal.vue component imports successfully', async () => {

    expect(Modal).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-modal-test-ts.js.map