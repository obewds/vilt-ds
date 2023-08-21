// ./tests/generators/jetstream/resources/js/Pages/Auth/generate-confirm-password-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateConfirmPasswordVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Auth/generate-confirm-password-vue'

describe('./src/generators/jetstream/resources/js/Pages/Auth/generate-confirm-password-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateConfirmPasswordVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateConfirmPasswordVue() === 'string').toBe(true)

    })

})
