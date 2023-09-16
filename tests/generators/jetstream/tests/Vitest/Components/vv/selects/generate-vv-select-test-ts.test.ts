// ./tests/generators/jetstream/tests/Vitest/Components/vv/selects/generate-vv-select-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvSelectTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/selects/generate-vv-select-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-select-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvSelectTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvSelectTestTs() === 'string').toBe(true)

    })

})
