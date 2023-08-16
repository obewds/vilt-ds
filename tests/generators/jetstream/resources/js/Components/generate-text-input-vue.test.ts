// ./tests/generators/jetstream/resources/js/Components/generate-text-input-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateTextInputVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-text-input-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-text-input-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateTextInputVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateTextInputVue() === 'string').toBe(true)

    })

})
