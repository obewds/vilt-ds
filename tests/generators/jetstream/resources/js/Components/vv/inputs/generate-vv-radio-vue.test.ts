// ./tests/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-radio-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvRadioVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-radio-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-radio-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvRadioVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvRadioVue() === 'string').toBe(true)

    })

})
