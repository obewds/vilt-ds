// ./src/generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-anchor-test-ts.ts

export default function (): string {

return `// ./tests/Components/vv/anchors/VvAnchor.test.ts

import { mount } from '@vue/test-utils'
import VvAnchor from '../../../../../resources/js/Components/vv/anchors/VvAnchor.vue'
import appVv from '../../../../../resources/js/app.vv'


test('VvAnchor.vue component imports successfully', async () => {

    expect(VvAnchor).toBeTruthy()

})


test('VvAnchor.vue component accepts a default slot value of markup and text', async () => {

    const testString = "<div>Test</div>"

    const wrapper = mount(VvAnchor, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    expect(wrapper.html()).toContain(testString)

})


test('VvAnchor.vue component props all work as expected', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            button: appVv.defaults.VvAnchor.button,
            buttonBlock: appVv.defaults.VvAnchor.buttonBlock,
            buttonFab: appVv.defaults.VvAnchor.buttonFab,
            buttonSize: appVv.defaults.VvAnchor.buttonSize,
            color: appVv.defaults.VvAnchor.color,
            external: appVv.defaults.VvAnchor.external,
            href: appVv.defaults.VvAnchor.href,
            palette: appVv.defaults.VvAnchor.palette,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')

})


test('VvAnchor.vue component external mode returns target="_blank" and rel="noopener noreferrer"', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            external: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('target="_blank"')
    expect(wrapper.html()).toContain('rel="noopener noreferrer"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')

})


test('VvAnchor.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-anchor-')

})
`;

}
