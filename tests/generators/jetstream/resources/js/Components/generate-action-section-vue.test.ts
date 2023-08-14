// ./tests/generators/jetstream/resources/js/Components/generate-action-section-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateActionSectionVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-action-section-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-action-section-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateActionSectionVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateActionSectionVue() === 'string').toBe(true)

    })

})
