// ./tests/generators/jetstream/resources/js/Components/generate-scroll-up-color-mode-section-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateScrollUpColorModeSectionVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-scroll-up-color-mode-section-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-scroll-up-color-mode-section-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateScrollUpColorModeSectionVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateScrollUpColorModeSectionVue() === 'string').toBe(true)

    })

})
