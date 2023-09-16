// ./src/generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-inertia-link-test-ts.ts

export default function (): string {

return `// ./tests/Components/vv/anchors/VvInertiaLink.test.ts

import { mount, RouterLinkStub } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvInertiaLink from '../../../../../resources/js/Components/vv/anchors/VvInertiaLink.vue'
import appVv from '../../../../../resources/js/app.vv'


test('VvInertiaLink.vue component imports successfully', async () => {

    expect(VvInertiaLink).toBeTruthy()

})


test('VvInertiaLink.vue component accepts a default slot value of markup and text', async () => {

    const testString = "<div>Test</div>"

    const wrapper = mount(VvInertiaLink, {
        global: {
            stubs: {
                InertiaLink: RouterLinkStub,
            },
        },
        props: {
            href: '/',
            to: '/',
        },
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    expect(wrapper.html()).toContain(testString)

})



test('VvInertiaLink.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvInertiaLink, {
        global: {
            provide: {
                vv: VvConfig,
            },
            stubs: {
                InertiaLink: RouterLinkStub,
            },
        },
        props: {
            href: '/',
            to: '/',
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')

})


test('VvInertiaLink.vue component returns an expected result when prop button is true', async () => {

    const wrapper = mount(VvInertiaLink, {
        global: {
            stubs: {
                InertiaLink: RouterLinkStub,
            },
        },
        props: {
            href: '/',
            to: '/',
            button: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')

})


test('VvInertiaLink.vue component returns an expected result when props button and buttonBlock are true', async () => {

    const wrapper = mount(VvInertiaLink, {
        global: {
            stubs: {
                InertiaLink: RouterLinkStub,
            },
        },
        props: {
            href: '/',
            to: '/',
            button: true,
            buttonBlock: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')

})


test('VvInertiaLink.vue component returns an expected result when props button and buttonFab are true', async () => {

    const wrapper = mount(VvInertiaLink, {
        global: {
            stubs: {
                InertiaLink: RouterLinkStub,
            },
        },
        props: {
            href: '/',
            to: '/',
            button: true,
            buttonFab: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')

})


test('VvInertiaLink.vue component returns an expected result when props button, palette, and color are defined', async () => {

    const wrapper = mount(VvInertiaLink, {
        global: {
            stubs: {
                InertiaLink: RouterLinkStub,
            },
        },
        props: {
            href: '/',
            to: '/',
            button: true,
            palette: 'solid',
            color: 'default',
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')

})


test('VvInertiaLink.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvInertiaLink, {
        global: {
            stubs: {
                InertiaLink: RouterLinkStub,
            },
        },
        props: {
            href: '/',
            debug: true,
            to: '/',
        },
    })

    expect(wrapper.html()).toContain('data-vv-inertia-link-')

})
`;

}
