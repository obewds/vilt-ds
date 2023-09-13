// ./src/generators/jetstream/tests/Vitest/Pages/generate-welcome-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Welcome.test.ts

import { mount } from '@vue/test-utils'
import Welcome from '../../../resources/js/Pages/Welcome.vue'

import '../../../resources/js/fontAwesomePro'

test('Welcome.vue component imports successfully', async () => {

    expect(Welcome).toBeTruthy()

})
`;

}
