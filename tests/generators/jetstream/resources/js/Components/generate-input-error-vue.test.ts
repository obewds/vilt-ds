// ./tests/generators/jetstream/resources/js/Components/generate-input-error-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateInputErrorVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-input-error-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-input-error-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateInputErrorVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateInputErrorVue() === 'string').toBe(true)

    })

})
