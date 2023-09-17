// ./tests/generators/jetstream/tests/Vitest/Pages/Profile/generate-profile-show-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateProfileShowTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Profile/generate-profile-show-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-profile-show-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateProfileShowTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateProfileShowTestTs() === 'string').toBe(true)

    })

})
