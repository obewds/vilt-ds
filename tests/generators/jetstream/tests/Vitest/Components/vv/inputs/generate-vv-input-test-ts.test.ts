// ./tests/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-input-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvInputTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-input-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-input-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvInputTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvInputTestTs() === 'string').toBe(true)

    })

})