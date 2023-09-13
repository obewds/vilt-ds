// ./tests/generators/jetstream/tests/Vitest/Pages/generate-welcome-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateWelcomeTestTs from '../../../../../../src/generators/jetstream/tests/Vitest/Pages/generate-welcome-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-welcome-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateWelcomeTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateWelcomeTestTs() === 'string').toBe(true)

    })

})
