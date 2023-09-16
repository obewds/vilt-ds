// ./src/generators/jetstream/tests/Vitest/Components/generate-application-logo-test-ts.ts

export default function (): string {

return `// ./tests/Components/ApplicationLogo.test.js

import { mount } from '@vue/test-utils'
import ApplicationLogo from '../../../resources/js/Components/ApplicationLogo.vue'


test('ApplicationLogo.vue component imports successfully', async () => {

    expect(ApplicationLogo).toBeTruthy()

})
`;

}
