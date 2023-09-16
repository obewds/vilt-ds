// ./tests/generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateYyyyyyTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateYyyyyyTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateYyyyyyTest() === 'string').toBe(true)

    })

})
