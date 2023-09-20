// ./src/generators/jetstream/tests/Vitest/Components/generate-confirmation-password-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/ConfirmsPassword.test.ts

import { mount } from '@vue/test-utils'
import ConfirmsPassword from '../../../resources/js/Components/ConfirmsPassword.vue'


test('ConfirmsPassword.vue component imports successfully', async () => {

    expect(ConfirmsPassword).toBeTruthy()

})
`;

}
