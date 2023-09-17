// ./tests/generators/jetstream/tests/Vitest/Pages/Auth/generate-confirm-password-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateConfirmPasswordTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Auth/generate-confirm-password-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-confirm-password-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateConfirmPasswordTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateConfirmPasswordTestTs() === 'string').toBe(true)

    })

})
