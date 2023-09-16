// ./tests/generators/jetstream/tests/Vitest/Components/generate-checkbox-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateCheckboxTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-checkbox-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-checkbox-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateCheckboxTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateCheckboxTest() === 'string').toBe(true)

    })

})
