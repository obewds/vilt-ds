// ./tests/generators/jetstream/tests/Vitest/Components/generate-welcome-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateWelcomeTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-welcome-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-welcome-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateWelcomeTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateWelcomeTest() === 'string').toBe(true)

    })

})
