// ./tests/generators/jetstream/tests/Vitest/Pages/Auth/generate-register-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateRegisterTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Auth/generate-register-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-register-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateRegisterTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateRegisterTestTs() === 'string').toBe(true)

    })

})
