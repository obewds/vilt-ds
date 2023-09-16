// ./src/generators/jetstream/tests/Vitest/Components/generate-confirmation-modal-test-ts.ts

export default function (): string {

return `// ./tests/Components/ConfirmationModal.test.ts

import { mount } from '@vue/test-utils'
import ConfirmationModal from '../../../resources/js/Components/ConfirmationModal.vue'


test('ConfirmationModal.vue component imports successfully', async () => {

    expect(ConfirmationModal).toBeTruthy()

})
`;

}
