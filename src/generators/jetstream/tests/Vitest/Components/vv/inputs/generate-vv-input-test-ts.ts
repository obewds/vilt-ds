// ./src/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-input-test-ts.ts

export default function (): string {

return `// ./tests/Components/vv/inputs/VvInput.test.ts

import { mount } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvInput from '../../../../../resources/js/Components/vv/inputs/VvInput.vue'


test('VvInput.test.vue component imports successfully', async () => {

    expect(VvInput).toBeTruthy()

})



test('VvInput.vue component returns a type email input using the component type prop', async () => {

    const testString = 'email'

    const wrapper = mount(VvInput, {
        props: {
            type: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)

})



test('VvInput.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvInput, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')

})


test('VvInput.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvInput, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-input-')

})
`;

}
