// ./tests/generators/jetstream/tests/Vitest/Pages/generate-privacy-policy-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generatePrivacyPolicyTestTs from '../../../../../../src/generators/jetstream/tests/Vitest/Pages/generate-privacy-policy-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-privacy-policy-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generatePrivacyPolicyTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generatePrivacyPolicyTestTs() === 'string').toBe(true)

    })

})
