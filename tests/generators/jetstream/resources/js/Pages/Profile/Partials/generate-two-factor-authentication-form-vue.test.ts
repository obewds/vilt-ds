// ./tests/generators/jetstream/resources/js/Pages/Profile/Partials/generate-two-factor-authentication-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateTwoFactorAuthenticationFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-two-factor-authentication-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-two-factor-authentication-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateTwoFactorAuthenticationFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateTwoFactorAuthenticationFormVue() === 'string').toBe(true)

    })

})
