// ./tests/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-delete-team-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateDeleteTeamFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-delete-team-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-delete-team-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateDeleteTeamFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateDeleteTeamFormTestTs() === 'string').toBe(true)

    })

})
