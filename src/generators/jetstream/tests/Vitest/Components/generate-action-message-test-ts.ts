// ./src/generators/jetstream/tests/Vitest/Components/generate-action-message-test-ts.ts

export default function (): string {

return `// ./tests/Components/ActionMessage.test.ts

import { mount } from '@vue/test-utils'
import ActionMessage from '../../../resources/js/Components/ActionMessage.vue'


test('ActionMessage.vue component imports successfully', async () => {

    expect(ActionMessage).toBeTruthy()

})
`;

}
