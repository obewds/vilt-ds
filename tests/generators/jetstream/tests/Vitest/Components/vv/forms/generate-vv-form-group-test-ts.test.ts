// ./tests/generators/jetstream/tests/Vitest/Components/vv/forms/generate-vv-form-group-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvFormGroupTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/forms/generate-vv-form-group-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-form-group-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvFormGroupTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvFormGroupTestTs() === 'string').toBe(true)

    })

})
