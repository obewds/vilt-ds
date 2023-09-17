// ./tests/generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-show-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTeamsShowTestTs from '../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-show-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-update-team-name-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTeamsShowTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTeamsShowTestTs() === 'string').toBe(true)

    })

})
