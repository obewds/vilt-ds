// ./src/generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-show-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Teams/Show.test.ts

import { mount } from '@vue/test-utils'
import Show from '../../../../resources/js/Pages/Teams/Show.vue'

test('Teams/Show.vue component imports successfully', async () => {

    expect(Show).toBeTruthy()

})
`;

}
