// ./src/generators/jetstream/tests/Vitest/Components/generate-responsive-nav-link-test-ts.ts

export default function (): string {

return `// ./tests/Components/ResponsiveNavLink.test.ts

import { mount } from '@vue/test-utils'
import ResponsiveNavLink from '../../../resources/js/Components/ResponsiveNavLink.vue'


test('ResponsiveNavLink.vue component imports successfully', async () => {

    expect(ResponsiveNavLink).toBeTruthy()

})
`;

}
