// ./src/generators/jetstream/tests/Vitest/Components/generate-dropdown-link-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/DropdownLink.test.ts

import { mount } from '@vue/test-utils'
import DropdownLink from '../../../resources/js/Components/DropdownLink.vue'


test('DropdownLink.vue component imports successfully', async () => {

    expect(DropdownLink).toBeTruthy()

})
`;

}
