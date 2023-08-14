// ./tests/generators/jetstream/resources/js/Components/generate-checkbox-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateCheckboxVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-checkbox-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-checkbox-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateCheckboxVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateCheckboxVue() === 'string').toBe(true)

    })

})
