// ./tests/generators/jetstream/tests/Vitest/Pages/Auth/generate-login-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateLoginTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Auth/generate-login-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-login-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateLoginTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateLoginTestTs() === 'string').toBe(true)

    })

})
