// ./tests/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-team-member-manager-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTeamMemberManagerTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-team-member-manager-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-team-member-manager-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTeamMemberManagerTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTeamMemberManagerTestTs() === 'string').toBe(true)

    })

})
