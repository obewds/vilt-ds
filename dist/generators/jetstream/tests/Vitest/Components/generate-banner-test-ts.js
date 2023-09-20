// ./src/generators/jetstream/tests/Vitest/Components/generate-banner-test-ts.ts
export default function () {
    return `// ./tests/Vitest/Components/Banner.test.ts

import { mount } from '@vue/test-utils'
import Banner from '../../../resources/js/Components/Banner.vue'


test('Banner.vue component imports successfully', async () => {

    expect(Banner).toBeTruthy()

})
`;
}
//# sourceMappingURL=generate-banner-test-ts.js.map