// ./src/generators/jetstream/tests/Vitest/Components/vv/buttons/generate-vv-scroll-up-test-ts.ts
export default function () {
    return `// ./tests/Components/vv/buttons/VvScrollUp.test.ts

import { mount } from '@vue/test-utils'
import VvScrollUp from '../../../../../resources/js/Components/vv/buttons/VvScrollUp.vue'


test('VvScrollUp.test.vue component imports successfully', async () => {

    expect(VvScrollUp).toBeTruthy()

})


test('VvScrollUp.vue component returns markup if passed a true value for the isVisible prop', async () => {

    const wrapper = mount(VvScrollUp, {
        props: {
            isVisible: true
        },
    })

    expect(wrapper.html()).toContain('button')

})


test('VvScrollUp.vue component is impacted by a click event as expected', async () => {

    const wrapper = mount(VvScrollUp, {
        props: {
            isVisible: true
        },
    })

    window.dispatchEvent(new CustomEvent('scroll', { detail: 2000 }))

    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('button')

})


test('VvScrollUp.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvScrollUp, {
        props: {
            debug: true,
            isVisible: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-scroll-up-')

})
`;
}
//# sourceMappingURL=generate-vv-scroll-up-test-ts.js.map