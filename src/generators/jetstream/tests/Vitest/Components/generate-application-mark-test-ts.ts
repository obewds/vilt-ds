// ./src/generators/jetstream/tests/Vitest/Components/generate-application-mark-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/ApplicationMark.test.ts

import { mount } from '@vue/test-utils'
import ApplicationMark from '../../../resources/js/Components/ApplicationMark.vue'


test('ApplicationMark.vue component imports successfully', async () => {

    expect(ApplicationMark).toBeTruthy()

})
`;

}
