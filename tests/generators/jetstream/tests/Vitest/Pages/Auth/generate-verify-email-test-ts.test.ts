// ./tests/generators/jetstream/tests/Vitest/Pages/Auth/generate-verify-email-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVerifyEmailTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Auth/generate-verify-email-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-verify-email-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVerifyEmailTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVerifyEmailTestTs() === 'string').toBe(true)

    })

})
