// ./src/generators/jetstream/tests/Vitest/Components/generate-section-border-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/SectionBorder.test.ts

import { mount } from '@vue/test-utils'
import SectionBorder from '../../../resources/js/Components/SectionBorder.vue'


test('SectionBorder.vue component imports successfully', async () => {

    expect(SectionBorder).toBeTruthy()

})
`;

}
