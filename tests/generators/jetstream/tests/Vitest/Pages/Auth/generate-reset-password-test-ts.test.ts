// ./tests/generators/jetstream/tests/Vitest/Pages/Auth/generate-reset-password-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateResetPasswordTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Auth/generate-reset-password-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-reset-password-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateResetPasswordTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateResetPasswordTestTs() === 'string').toBe(true)

    })

})
