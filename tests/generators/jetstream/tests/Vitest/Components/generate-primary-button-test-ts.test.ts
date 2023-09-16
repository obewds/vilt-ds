// ./tests/generators/jetstream/tests/Vitest/Components/generate-primary-button-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generatePrimaryButtonTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-primary-button-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-primary-button-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generatePrimaryButtonTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generatePrimaryButtonTest() === 'string').toBe(true)

    })

})
