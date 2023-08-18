// ./tests/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-color-mode-button-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvColorModeButtonVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-color-mode-button-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-color-mode-button-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvColorModeButtonVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvColorModeButtonVue() === 'string').toBe(true)

    })

})
