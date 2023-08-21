// ./tests/generators/jetstream/resources/js/Pages/Auth/generate-forgot-password-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateForgotPasswordVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Auth/generate-forgot-password-vue'

describe('./src/generators/jetstream/resources/js/Pages/Auth/generate-forgot-password-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateForgotPasswordVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateForgotPasswordVue() === 'string').toBe(true)

    })

})
