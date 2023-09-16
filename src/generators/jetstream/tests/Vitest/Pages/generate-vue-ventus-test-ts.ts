// ./src/generators/jetstream/tests/Vitest/Pages/generate-vue-ventus-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/VueVentus.test.ts

import { mount } from '@vue/test-utils'
import VueVentus from '../../../resources/js/Pages/VueVentus.vue'

test('VueVentus.vue component imports successfully', async () => {

    expect(VueVentus).toBeTruthy()

})
`;

}
