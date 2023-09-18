// ./tests/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-delete-user-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateDeleteUserFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-delete-user-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-delete-user-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateDeleteUserFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateDeleteUserFormTestTs() === 'string').toBe(true)

    })

})
