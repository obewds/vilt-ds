// ./src/generators/jetstream/tests/Vitest/Pages/Profile/generate-profile-show-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Profile/Show.test.ts

import { mount } from '@vue/test-utils'
import Show from '../../../../resources/js/Pages/Profile/Show.vue'

test('Profile/Show.vue component imports successfully', async () => {

    expect(Show).toBeTruthy()

})
`;

}
