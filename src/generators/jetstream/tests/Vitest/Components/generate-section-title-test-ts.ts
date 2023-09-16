// ./src/generators/jetstream/tests/Vitest/Components/generate-section-title-test-ts.ts

export default function (): string {

return `// ./tests/Components/SectionTitle.test.ts

import { mount } from '@vue/test-utils'
import SectionTitle from '../../../resources/js/Components/SectionTitle.vue'


test('SectionTitle.vue component imports successfully', async () => {

    expect(SectionTitle).toBeTruthy()

})
`;

}
