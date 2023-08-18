// ./tests/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-checkbox-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvCheckboxVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-checkbox-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/inputs/generate-vv-checkbox-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvCheckboxVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvCheckboxVue() === 'string').toBe(true)

    })

})
