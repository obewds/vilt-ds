// ./tests/generators/jetstream/tests/Vitest/Components/generate-text-input-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTextInputTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-text-input-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-text-input-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTextInputTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTextInputTest() === 'string').toBe(true)

    })

})
