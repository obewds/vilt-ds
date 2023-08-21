// ./tests/generators/jetstream/resources/js/Pages/Auth/generate-reset-password-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateResetPasswordVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Auth/generate-reset-password-vue'

describe('./src/generators/jetstream/resources/js/Pages/Auth/generate-reset-password-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateResetPasswordVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateResetPasswordVue() === 'string').toBe(true)

    })

})
