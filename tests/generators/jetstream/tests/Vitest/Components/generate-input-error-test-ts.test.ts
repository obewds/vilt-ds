// ./tests/generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateInputErrorTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateInputErrorTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateInputErrorTest() === 'string').toBe(true)

    })

})
