// ./tests/generators/jetstream/tests/Vitest/Components/generate-modal-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateModalTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-modal-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-modal-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateModalTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateModalTest() === 'string').toBe(true)

    })

})
