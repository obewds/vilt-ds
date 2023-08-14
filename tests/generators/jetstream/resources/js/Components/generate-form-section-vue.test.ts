// ./tests/generators/jetstream/resources/js/Components/generate-form-section-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateFormSectionVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-form-section-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-form-section-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateFormSectionVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateFormSectionVue() === 'string').toBe(true)

    })

})
