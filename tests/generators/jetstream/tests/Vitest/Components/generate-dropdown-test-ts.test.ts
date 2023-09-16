// ./tests/generators/jetstream/tests/Vitest/Components/generate-dropdown-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateDropdownTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-dropdown-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-dropdown-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateDropdownTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateDropdownTest() === 'string').toBe(true)

    })

})
