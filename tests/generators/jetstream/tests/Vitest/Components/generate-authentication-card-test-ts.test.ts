// ./tests/generators/jetstream/tests/Vitest/Components/generate-authentication-card-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateAuthenticationCardTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-authentication-card-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-authentication-card-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateAuthenticationCardTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateAuthenticationCardTest() === 'string').toBe(true)

    })

})
