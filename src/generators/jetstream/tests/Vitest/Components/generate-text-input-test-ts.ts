// ./src/generators/jetstream/tests/Vitest/Components/generate-text-input-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/TextInput.test.ts

import { mount } from '@vue/test-utils'
import TextInput from '../../../resources/js/Components/TextInput.vue'


test('TextInput.vue component imports successfully', async () => {

    expect(TextInput).toBeTruthy()

})
`;

}
