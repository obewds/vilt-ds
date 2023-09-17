// ./tests/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-update-team-name-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateUpdateTeamNameFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-update-team-name-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-update-team-name-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateUpdateTeamNameFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateUpdateTeamNameFormTestTs() === 'string').toBe(true)

    })

})
