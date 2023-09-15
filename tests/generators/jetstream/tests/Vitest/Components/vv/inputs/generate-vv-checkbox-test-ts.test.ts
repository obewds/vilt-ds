// ./tests/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-checkbox-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvCheckboxTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-checkbox-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-checkbox-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvCheckboxTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvCheckboxTestTs() === 'string').toBe(true)

    })

})
