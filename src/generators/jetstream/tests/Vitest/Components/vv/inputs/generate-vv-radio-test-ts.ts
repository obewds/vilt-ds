// ./src/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-radio-test-ts.ts

export default function (): string {

return `// ./tests/Components/vv/inputs/VvRadio.test.ts

import { mount } from '@vue/test-utils'
import VvRadio from '../../../../../resources/js/Components/vv/inputs/VvRadio.vue'


test('VvRadio.test.vue component imports successfully', async () => {

    expect(VvRadio).toBeTruthy()

})



test('VvRadio.vue component returns a radio input using the component type prop', async () => {

    const testString = 'test-value'

    const wrapper = mount(VvRadio, {
        props: {
            value: testString,
            checked: true,
        },
    })

    expect(wrapper.html()).toContain(testString)

})
`;

}
