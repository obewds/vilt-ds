// ./tests/generators/jetstream/resources/js/Components/generate-primary-button-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generatePrimaryButtonVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-primary-button-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-primary-button-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generatePrimaryButtonVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generatePrimaryButtonVue() === 'string').toBe(true)

    })

})
