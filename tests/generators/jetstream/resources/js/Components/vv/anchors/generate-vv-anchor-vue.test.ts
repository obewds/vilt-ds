// ./tests/generators/jetstream/resources/js/Components/vv/anchors/generate-vv-anchor-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvAnchorVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/anchors/generate-vv-anchor-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/anchors/generate-vv-anchor-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvAnchorVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvAnchorVue() === 'string').toBe(true)

    })

})
