// ./src/generators/jetstream/tests/Vitest/Components/generate-dialog-modal-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/DialogModal.test.ts

import { mount } from '@vue/test-utils'
import DialogModal from '../../../resources/js/Components/DialogModal.vue'


test('DialogModal.vue component imports successfully', async () => {

    expect(DialogModal).toBeTruthy()

})
`;

}
