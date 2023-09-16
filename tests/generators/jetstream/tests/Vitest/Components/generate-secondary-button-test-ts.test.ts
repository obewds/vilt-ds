// ./tests/generators/jetstream/tests/Vitest/Components/generate-secondary-button-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateSecondaryButtonTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-secondary-button-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-secondary-button-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateSecondaryButtonTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateSecondaryButtonTest() === 'string').toBe(true)

    })

})
