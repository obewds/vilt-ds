// ./src/generators/jetstream/tests/Vitest/Components/generate-nav-link-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/NavLink.test.ts

import { mount } from '@vue/test-utils'
import NavLink from '../../../resources/js/Components/NavLink.vue'


test('NavLink.vue component imports successfully', async () => {

    expect(NavLink).toBeTruthy()

})
`;

}
