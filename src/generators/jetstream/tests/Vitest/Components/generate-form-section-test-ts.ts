// ./src/generators/jetstream/tests/Vitest/Components/generate-form-section-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/FormSection.test.ts

import { mount } from '@vue/test-utils'
import FormSection from '../../../resources/js/Components/FormSection.vue'


test('FormSection.vue component imports successfully', async () => {

    expect(FormSection).toBeTruthy()

})
`;

}
