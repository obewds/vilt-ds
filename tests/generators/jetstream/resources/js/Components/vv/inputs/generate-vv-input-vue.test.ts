// ./tests/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-input-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvInputVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-input-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-input-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvInputVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvInputVue() === 'string').toBe(true)

    })

})
