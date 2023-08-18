// ./tests/generators/jetstream/resources/js/Components/vv/anchors/generate-vv-inertia-link-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvInertiaLinkVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/anchors/generate-vv-inertia-link-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/anchors/generate-vv-inertia-link-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvInertiaLinkVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvInertiaLinkVue() === 'string').toBe(true)

    })

})
