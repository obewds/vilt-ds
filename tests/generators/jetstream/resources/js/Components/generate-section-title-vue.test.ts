// ./tests/generators/jetstream/resources/js/Components/generate-section-title-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateSectionBorderVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-section-title-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-section-title-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateSectionBorderVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateSectionBorderVue() === 'string').toBe(true)

    })

})
