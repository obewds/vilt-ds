// ./tests/generators/jetstream/resources/js/Components/generate-secondary-button-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateSecondaryButtonVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-secondary-button-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-secondary-button-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateSecondaryButtonVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateSecondaryButtonVue() === 'string').toBe(true)

    })

})
