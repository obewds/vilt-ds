// ./tests/generators/jetstream/tests/Vitest/Pages/API/generate-api-index-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateApiIndexTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/API/generate-api-index-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-api-index-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateApiIndexTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateApiIndexTestTs() === 'string').toBe(true)

    })

})
