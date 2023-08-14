// ./tests/generators/jetstream/resources/js/Components/generate-input-label-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateInputLabelVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-input-label-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-input-label-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateInputLabelVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateInputLabelVue() === 'string').toBe(true)

    })

})
