// ./src/generators/jetstream/tests/Vitest/Components/vv/textareas/generate-vv-textarea-test-ts.ts

export default function (): string {

return `// ./tests/Components/vv/textareas/VvTextarea.test.ts

import { mount } from '@vue/test-utils'
import VvTextarea from '../../../../../resources/js/Components/vv/textareas/VvTextarea.vue'


test('VvTextarea.test.vue component imports successfully', async () => {

    expect(VvTextarea).toBeTruthy()

})
`;

}
