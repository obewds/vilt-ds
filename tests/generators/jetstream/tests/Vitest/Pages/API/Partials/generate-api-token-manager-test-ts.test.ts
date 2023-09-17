// ./tests/generators/jetstream/tests/Vitest/Pages/API/Partials/generate-api-token-manager-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateApiTokenManagerTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/API/Partials/generate-api-token-manager-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-api-token-manager-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateApiTokenManagerTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateApiTokenManagerTestTs() === 'string').toBe(true)

    })

})
