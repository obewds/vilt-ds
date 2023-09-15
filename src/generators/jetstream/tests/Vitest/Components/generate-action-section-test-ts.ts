// ./src/generators/jetstream/tests/Vitest/Components/generate-action-section-test-ts.ts

export default function (): string {

return `// ./tests/Components/ActionSection.test.ts

import { mount } from '@vue/test-utils'
import ActionSection from '../../../resources/js/Components/ActionSection.vue'


test('ActionSection.vue component imports successfully', async () => {

    expect(ActionSection).toBeTruthy()

})
`;

}
