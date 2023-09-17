// ./tests/generators/jetstream/tests/Vitest/Pages/Auth/generate-forgot-password-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateForgotPasswordTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Auth/generate-forgot-password-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-forgot-password-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateForgotPasswordTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateForgotPasswordTestTs() === 'string').toBe(true)

    })

})
