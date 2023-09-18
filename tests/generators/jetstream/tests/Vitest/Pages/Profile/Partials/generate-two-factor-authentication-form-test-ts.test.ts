// ./tests/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-two-factor-authentication-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTwoFactorAuthenticationFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-two-factor-authentication-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-two-factor-authentication-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTwoFactorAuthenticationFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTwoFactorAuthenticationFormTestTs() === 'string').toBe(true)

    })

})
