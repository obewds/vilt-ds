// ./tests/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-update-password-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateUpdatePasswordFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-update-password-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-update-password-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateUpdatePasswordFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateUpdatePasswordFormTestTs() === 'string').toBe(true)

    })

})
