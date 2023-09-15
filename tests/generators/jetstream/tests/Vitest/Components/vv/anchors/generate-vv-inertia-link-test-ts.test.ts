// ./tests/generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-inertia-link-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvInertiaLinkTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-inertia-link-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-inertia-link-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvInertiaLinkTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvInertiaLinkTestTs() === 'string').toBe(true)

    })

})
