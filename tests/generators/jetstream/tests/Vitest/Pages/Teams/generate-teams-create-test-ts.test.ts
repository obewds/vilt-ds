// ./tests/generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-create-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTeamsCreateTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-create-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-update-team-name-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTeamsCreateTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTeamsCreateTestTs() === 'string').toBe(true)

    })

})
