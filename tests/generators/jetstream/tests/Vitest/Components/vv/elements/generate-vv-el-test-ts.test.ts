// ./tests/generators/jetstream/tests/Vitest/Components/vv/elements/generate-vv-el-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvElTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/elements/generate-vv-el-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-el-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvElTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvElTestTs() === 'string').toBe(true)

    })

})
