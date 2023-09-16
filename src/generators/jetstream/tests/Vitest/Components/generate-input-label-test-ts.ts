// ./src/generators/jetstream/tests/Vitest/Components/generate-input-label-test-ts.ts

export default function (): string {

return `// ./tests/Components/InputLabel.test.ts

import { mount } from '@vue/test-utils'
import InputLabel from '../../../resources/js/Components/InputLabel.vue'


test('InputLabel.vue component imports successfully', async () => {

    expect(InputLabel).toBeTruthy()

})
`;

}
