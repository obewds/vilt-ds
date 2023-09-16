// ./tests/generators/jetstream/tests/Vitest/Components/generate-danger-button-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateDangerButtonTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-danger-button-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-danger-button-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateDangerButtonTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateDangerButtonTest() === 'string').toBe(true)

    })

})
