// ./src/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-checkbox-test-ts.ts
export default function () {
    return `// ./tests/Components/vv/inputs/VvCheckbox.test.ts

import { mount } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvCheckbox from '../../../../../resources/js/Components/vv/inputs/VvCheckbox.vue'


test('VvCheckbox.test.vue component imports successfully', async () => {

    expect(VvCheckbox).toBeTruthy()

})



test('VvCheckbox.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvCheckbox, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')

})


test('VvCheckbox.vue component can successfully ingest and output the expected data-test attribute value containing the passed in hex values props', async () => {

    const wrapper = mount(VvCheckbox, {
        props: {
            lightCheckHex: '#ffffff',
            darkCheckHex: '#000000',
        },
    })

    expect(wrapper.html()).toContain('ffffff')
    expect(wrapper.html()).toContain('000000')

})
`;
}
//# sourceMappingURL=generate-vv-checkbox-test-ts.js.map