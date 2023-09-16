// ./tests/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-radio-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvRadioTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-radio-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-radio-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvRadioTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvRadioTestTs() === 'string').toBe(true)

    })

})