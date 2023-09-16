// ./src/generators/jetstream/tests/Vitest/Components/vv/elements/generate-vv-el-test-ts.ts
export default function () {
    return `// ./tests/Components/vv/elements/VvEl.test.ts

import { mount } from '@vue/test-utils'
import VvEl from '../../../../../resources/js/Components/vv/elements/VvEl.vue'


test('VvEl.test.vue component imports successfully', async () => {

    expect(VvEl).toBeTruthy()

})


test('VvEl.vue component accepts a tag prop that validates', async () => {

    const wrapper = mount(VvEl, {
        props: {
            tag: 'div',
        },
    })

    expect(wrapper.html()).toBeTruthy()

})


test('VvEl.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvEl, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-el-')

})
`;
}
//# sourceMappingURL=generate-vv-el-test-ts.js.map