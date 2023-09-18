// ./tests/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-update-profile-information-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateUpdateProfileInformationFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-update-profile-information-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-update-profile-information-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateUpdateProfileInformationFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateUpdateProfileInformationFormTestTs() === 'string').toBe(true)

    })

})
