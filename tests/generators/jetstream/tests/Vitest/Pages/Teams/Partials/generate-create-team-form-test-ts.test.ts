// ./tests/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-create-team-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateCreateTeamFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-create-team-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-create-team-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateCreateTeamFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateCreateTeamFormTestTs() === 'string').toBe(true)

    })

})
