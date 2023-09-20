// ./src/generators/jetstream/tests/Vitest/Components/generate-modal-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/Modal.test.ts

import { mount } from '@vue/test-utils'
import Modal from '../../../resources/js/Components/Modal.vue'


test('Modal.vue component imports successfully', async () => {

    expect(Modal).toBeTruthy()

})
`;

}
