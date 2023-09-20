// ./src/generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/InputError.test.ts

import { mount } from '@vue/test-utils'
import InputError from '../../../resources/js/Components/InputError.vue'


test('InputError.vue component imports successfully', async () => {

    expect(InputError).toBeTruthy()

})
`;

}
