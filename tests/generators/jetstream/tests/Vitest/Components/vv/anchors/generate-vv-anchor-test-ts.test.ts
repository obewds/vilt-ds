// ./tests/generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-anchor-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvAnchorTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-anchor-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-anchor-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvAnchorTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvAnchorTestTs() === 'string').toBe(true)

    })

})
