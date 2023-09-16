// ./tests/generators/jetstream/tests/Vitest/Pages/generate-terms-of-service-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTermsOfServiceTestTs from '../../../../../../src/generators/jetstream/tests/Vitest/Pages/generate-terms-of-service-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-terms-of-service-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTermsOfServiceTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTermsOfServiceTestTs() === 'string').toBe(true)

    })

})
