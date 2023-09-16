// ./tests/generators/jetstream/tests/Vitest/Components/generate-dropdown-link-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateDropdownLinkTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-dropdown-link-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-dropdown-link-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateDropdownLinkTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateDropdownLinkTest() === 'string').toBe(true)

    })

})
